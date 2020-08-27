import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addStoryAction } from '../actions/addStoryAction'
import { useHistory } from 'react-router-dom'


const initialFormValues = {
    title: '',
    location: '',
    body: '',
    image_url: '',
}


const AddStory = (props) => {

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
    const newStory = {
        ...formInputs,
        user_id: props.userId
    }
    console.log(newStory)
    props.addStoryAction(newStory)
    history.push(`/dashboard/${props.userId}`)
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
                placeholder='image-url (optional)'
                name='image_url'
                value={formInputs.image_url}
                onChange={handleChanges}
                /><br/>
                <textarea 
                type="textarea"
                placeholder='Body'
                name='body'
                value={formInputs.body}
                onChange={handleChanges}
                rows={5}
                cols={20}
                />
                <button>Add Story</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
return {
    userId: state.userId
}

}
export default connect(mapStateToProps, {addStoryAction})(AddStory)