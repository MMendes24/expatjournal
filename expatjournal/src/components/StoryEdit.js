import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import editStory from '../actions/editStoryActions'
import fetchSingleStory from '../actions/getStoryActions'


const initialStory = {
    title: "",
    location: "",
    story: "",
}

const StoryEdit = props => {
    const [ storyValues, setStoryValues ] = useState(initialStory)

    const fetchStory = () => {
        props.fetchSingleStory()
        console.log(props)
    } 

    useEffect(() => {
        fetchStory()
        console.log("Story fetched")
    })

    const handleStoryChanges = e => {
        setStoryValues({
            ...storyValues,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
    }

    return (
        <section>
            <form onSubmit={onSubmit}>

                <label>Title:&nbsp;
                    <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={storyValues.title}
                    onChange={handleStoryChanges}
                    />
                </label>

                <label>Location:&nbsp;
                    <input
                    name="location"
                    type="text"
                    placeholder="Where it happened..."
                    value={storyValues.location}
                    onChange={handleStoryChanges}
                    />
                </label>

                <label>The Story:&nbsp;
                    <input 
                    name="story"
                    type="text"
                    placeholder="Your story..."
                    value={storyValues.story}
                    onChange={handleStoryChanges}
                    />
                </label>

            </form>
        </section>
    )
}


export default connect(null, {editStory, fetchSingleStory})(StoryEdit)