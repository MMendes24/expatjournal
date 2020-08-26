import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import editStory from '../actions/editStoryActions'
import fetchSingleStory from '../actions/getStoryActions'

const FormStyled = styled.form`

display: flex;
flex-flow: column;
justify-content: center;
align-items: center;

label {
    font-size: 1.5rem;
    font-style: italic;
}

 input {
     margin: 1% 0%;
 }

` 

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
        console.log(props.body)
        setStory({
            ...story,
            [e.target.name]: e.target.value
        })
    }

    const editedStory = {
        ...story
    }

    const onSubmit = e => {
        e.preventDefault()
        editStory(editedStory)

    }

    return (
        <section>
            <FormStyled onSubmit={onSubmit}>

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
                <button type="submit">Complete</button>
            </FormStyled>
        </section>
    )
}

const mapStatetoProps = state => {
    console.log(state)
    return {

        isLoading: state.isLoading,
        error: state.error,

        //from api
        body: state.body,
    }
}

export default connect(mapStatetoProps, {editStory, fetchSingleStory})(StoryEdit)