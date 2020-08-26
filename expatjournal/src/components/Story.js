import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

import fetchSingleStory from '../actions/getStoryActions'
import deleteStoryActions from '../actions/deleteStoryActions'

const Story = props => {
    const history = useHistory()

    //fetch the individual Story to display when a story is clicked on in the Dashboard
    const fetchStory = () => {
        props.fetchSingleStory()
        console.log(props.body)
    } 

    useEffect(() => {
        fetchStory()
    }, [])

    //story functionality (delete), functionality missing due to lack of endpoint and difficulty to simulate without such
    const deleteStory = e => {
        e.preventDefault()
        props.deleteStoryActions()
    }

    //shape of data (to be removed)

    //image
    // title
    // username?
    // time
    // location
    // body

    return (
        <section>
            <img href="#" alt="nolo"/>
            <h2>Right place!</h2>
            {/* <h1>{props.title}</h1>
            <h2>{props.location}</h2>
            <h3>{props.body}</h3>
            <h3>{null}</h3>
            <p>{null}</p> */}
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