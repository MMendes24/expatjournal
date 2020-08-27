import React, { useState, useEffect } from "react";
import SignUpForm from "./components/SignUpForm";
import LoginForm from "./components/LoginForm";
import axios from "axios";
import PrivateRoute from './components/privateRoute'
import * as yup from "yup";
import { Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AddStory from "./components/AddStory";
import StoryEdit from "./components/StoryEdit";
import Story from "./components/Story";
import Navbar from './components/Navbar'
import { connect } from 'react-redux'
import { registerAction } from './actions/registerAction'

import './App.css'

// const dummyData = {
//   sha: { username: "Sha", age: 29, id: 0 },
//   tom: { username: "Tom", age: 30, id: 1 },
// };

const formSchema = yup.object().shape({
  username: yup
    .string()
    .min(2, "Username must be at least 2 characters long")
    .required("Username is Required!"),
  password: yup
    .string()
    .min(5, "Your password must be 5 or more characters")
    .required("Password is required!"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required!"),
});

const initialFormValues = {
  username: "",
  password: "",
  email: "",
};

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
};

const initialUsers = [];
const initialDisabled = true;

function App(props) {
  const [user, setUser] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  // const getUsers = () => {
  //   axios
  //     .get("https://expatjournal2.netlify.app/") //users
  //     .then((res) => {
  //       setUser(res.data);
  //     })
  //     .catch((err) => {
  //       debugger;
  //     });
  // };

  const postNewUser = (newUser) => {
    axios
      .post("https://reqres.in/api/users", newUser)
      .then((res) => {
        setUser([...user, res.data]);
      })
      .catch((err) => {
        // debugger;
      })
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = () => {
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password.trim(),
      email: formValues.email,
    };
    // postNewUser(newUser);
    console.log(newUser)
    props.registerAction(newUser)
  };

  useEffect(() => {
    // getUsers();
    console.log(formValues);
    console.log(user);
    console.log(initialUsers);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    formSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className="App">
      <Navbar />
      <>

          <Route exact path="/register">
            <SignUpForm
              values={formValues}
              inputChange={inputChange}
              submit={submit}
              disabled={disabled}
              errors={formErrors}
            />
          </Route>
          <PrivateRoute exact path='/dashboard/:userId' component={Dashboard} />
          <PrivateRoute exact path="/story/:id" component={Story} />
          <PrivateRoute exact path='/edit-story/:id' component={StoryEdit}/>
          <PrivateRoute exact path='/add-story' component={AddStory}/>
          <Route exact path="/">
            <LoginForm
              values={formValues}
              inputChange={inputChange}
              submit={submit}
            />
          </Route>
      </>
    </div>
  );
}

export default connect(null, {registerAction})(App)

// {
//   Object.values(user).map((x) => (
//     <SignUp key={x.id} username={x.username} age={x.age} />
//   ));
// }
