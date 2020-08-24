import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addStory } from '../actions/addStory'


const initialFormValues = {
    title: '',
    location: '',
    story: '',
    time: new Date().toDateString()
}


const addStory = () => {

    const [formInputs, setFormInputs] = useState(initialFormValues)

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

}
    return (
        <div>
            <form>
                <h2>Add Story</h2>
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
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {


}
export default connect(mapStateToProps, {})(addStory)