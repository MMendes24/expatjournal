import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addStoryAction } from '../actions/addStoryAction'
import { useHistory } from 'react-router-dom'


const initialFormValues = {
    title: '',
    location: '',
    story: '',
}


const AddStory = () => {

    const [formInputs, setFormInputs] = useState(initialFormValues)
    const history = useHistory()

    const handleChanges = (e) => {
    //  const {name, value} = e.target.value
     setFormInputs({
         ...formInputs,
         [e.target.name]: e.target.value
     })
    }

const handleSubmit = (e) => {
    e.preventDefault()
    // insert action 
    // props.addStoryAction(formInputs)
    // history.push('/')
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Add a new Story</h2>
                <input 
                type="text"
                placeholder='title'
                name='title'
                value={formInputs.title}
                onChange={handleChanges}
                /> <br/>
                <input 
                type="text"
                placeholder='location'
                name='location'
                value={formInputs.location}
                onChange={handleChanges}
                /><br/>
                <input 
                type="text"
                placeholder='Story'
                name='story'
                value={formInputs.story}
                onChange={handleChanges}
                />
                <button>Add Story</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {


}
export default connect(mapStateToProps, {addStoryAction})(AddStory)