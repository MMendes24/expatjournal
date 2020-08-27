import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'

import editStory from '../actions/editStoryActions'

const FormStyled = styled.form`

display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
margin: 2% 0%;

label {
    font-size: 1.5rem;
    font-style: italic;
}

 input {
     margin: 1% 0%;
 }

` 
const SectionStyled = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`


const initialStory = {
    title: "",
    location: "",
    body: "",
}

const StoryEdit = props => {
    const [ story, setStory ] = useState(initialStory)
    const params = useParams()
    const history = useHistory()

    const handleStoryChanges = e => {
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
        console.log(editedStory)
        props.editStory(params.id, editedStory)
        history.push(`/dashboard/${props.userId}`)
    }

    return (
        <SectionStyled>
            <img className="story-img" src="https://source.unsplash.com/random/400x400" alt="completely random"/>
            <FormStyled onSubmit={onSubmit}>

                <label className="story-subheading">New Title:&nbsp;</label>
                    <input
                    name="title"
                    type="text"
                    placeholder="Title"
                    value={story.title}
                    onChange={handleStoryChanges}
                    />

                <label className="story-subheading">New Location:&nbsp;</label>
                    <input
                    name="location"
                    type="text"
                    placeholder="Where it happened..."
                    value={story.location}
                    onChange={handleStoryChanges}
                    />
                
                <label className="story-subheading">The New Story:&nbsp;</label>
                    <textarea
                    name="body"
                    type="text"
                    rows="4" 
                    cols="50"
                    placeholder="Your story..."
                    value={story.body}
                    onChange={handleStoryChanges}
                    />
                <button className="story-button" type="submit">Complete</button>
            </FormStyled>
        </SectionStyled>
    )
}

const mapStatetoProps = state => {
    console.log(state)
    return {

        isLoading: state.isLoading,
        error: state.error,

        //from api
        body: state.body,
        userId: state.userId,
    }
}

export default connect(mapStatetoProps, {editStory})(StoryEdit)