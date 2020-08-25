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
    const [ story, setStory ] = useState(initialStory)

    useEffect(() => {
        props.fetchSingleStory()
        console.log(props)
    }, [])

    const handleStoryChanges = e => {
        console.log(props.stories)
        setStory({
            ...story,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        editStory()
    }

    return (
        <section>
            <form onSubmit={onSubmit}>

                <label>Title:&nbsp;
                    <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={story.title}
                    onChange={handleStoryChanges}
                    />
                </label>

                <label>Location:&nbsp;
                    <input
                    name="location"
                    type="text"
                    placeholder="Where it happened..."
                    value={story.location}
                    onChange={handleStoryChanges}
                    />
                </label>

                <label>The Story:&nbsp;
                    <input 
                    name="story"
                    type="text"
                    placeholder="Your story..."
                    value={story.story}
                    onChange={handleStoryChanges}
                    />
                </label>
                <button>Complete</button>
            </form>
        </section>
    )
}

const mapStatetoProps = state => {
    console.log(state)
    return {

        isLoading: state.isLoading,
        error: state.error,

        //from api
        stories: state.stories,
    }
}

export default connect(mapStatetoProps, {editStory, fetchSingleStory})(StoryEdit)