import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { useHistory, useParams } from "react-router-dom";
import styled from 'styled-components'

import fetchSingleStory from '../actions/getStoryActions'
import deleteStoryActions from '../actions/deleteStoryActions'

const StyledSection = styled.section`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

const Story = props => {
    const history = useHistory()
    const params = useParams();
    let isPhoto = false

    //fetch the individual Story to display when a story is clicked on in the Dashboard
    const fetchStory = () => {
        props.fetchSingleStory(params.id)
    } 

    useEffect(() => {
        fetchStory()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        isPhoto = true
    }, [])

    const deleteStory = e => {
        e.preventDefault()
        props.deleteStoryActions(params.id)
        history.push(`/dashboard/${props.userId}`)
    }

    return (
        <StyledSection>
            <h1 className="story-heading">{props.body.title}</h1>
            <img className="story-img" src={isPhoto = true ? props.body.image_url: "https://source.unsplash.com/random/400x400"} alt="completely random"/>
            <h2 className="story-subheading">{props.body.location}</h2>
            <p className="story-body">{props.body.body}</p>
            <button className="story-button" onClick={deleteStory}>Delete</button>
            <button className="story-button" onClick={() => history.push(`/edit-story/${params.id}`)}>Edit</button>
        </StyledSection>
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

export default connect(mapStatetoProps, {deleteStoryActions, fetchSingleStory})(Story)