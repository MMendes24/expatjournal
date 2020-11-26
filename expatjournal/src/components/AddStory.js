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
            user_id: localStorage.getItem('user_id')
        }
        console.log(newStory)
        props.addStoryAction(newStory)
        history.push(`/dashboard/${newStory.user_id}`)
    }
    return (
        <div className='add-story-form'>
            <form onSubmit={handleSubmit}>
                <h2>Add a new Story</h2>
                <input
                    type="text"
                    placeholder='title'
                    name='title'
                    value={formInputs.title}
                    onChange={handleChanges}
                /> <br />
                <input
                    type="text"
                    placeholder='location'
                    name='location'
                    value={formInputs.location}
                    onChange={handleChanges}
                /><br />
                <input
                    type="text"
                    placeholder='image-url (optional)'
                    name='image_url'
                    value={formInputs.image_url}
                    onChange={handleChanges}
                /><br />
                <textarea className='text-area'
                    type="textarea"
                    placeholder='Body'
                    name='body'
                    value={formInputs.body}
                    onChange={handleChanges}
                    rows={10}
                    cols={50}
                />
                <br />
                <button className='dashboard-buttons'>Add Story</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.userId
    }

}
export default connect(mapStateToProps, { addStoryAction })(AddStory)