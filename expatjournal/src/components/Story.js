import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { useHistory, useParams } from "react-router-dom";

import fetchSingleStory from '../actions/getStoryActions'
import deleteStoryActions from '../actions/deleteStoryActions'

const Story = props => {
    const history = useHistory()
    const params = useParams();

    //fetch the individual Story to display when a story is clicked on in the Dashboard
    const fetchStory = () => {
        props.fetchSingleStory(params.id)
        console.log(params.id)
    } 

    useEffect(() => {
        fetchStory()
    }, [])

    //story functionality (delete), functionality missing due to lack of endpoint and difficulty to simulate without such
    const deleteStory = e => {
        e.preventDefault()
        props.deleteStoryActions()
        history.push("/dashboard")
    }

    //shape of data (to be removed)

    //image
    // title
    // location
    // body

    return (
        <section>
            <img href="#" alt="nolo"/>
            <h2>Right place!</h2>
            <h1>{props.body.title}</h1>
            <h2>{props.body.location}</h2>
            <h3>{props.body.body}</h3>
            <button onClick={deleteStory}>Delete</button>
        </section>
    )
}

const mapStatetoProps = state => {
    console.log(state)
    return {
        isLoading: state.isLoading,
        error: state.error,
        //from api
        body: state.body
    }
}

export default connect(mapStatetoProps, {deleteStoryActions, fetchSingleStory})(Story)