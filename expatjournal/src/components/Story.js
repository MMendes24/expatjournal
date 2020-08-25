import React, { useEffect } from "react";
import { connect } from 'react-redux'
import { useHistory } from "react-router-dom";

import fetchSingleStory from '../actions/getStoryActions'

const Story = props => {
    const history = useHistory()

    //fetch the individual Story to display when a story is clicked on in the Dashboard
    const fetchStory = () => {
        props.fetchSingleStory()
        console.log(props.stories)
    } 

    useEffect(() => {
        fetchStory()
    }, [])

    //story functionality (delete), functionality missing due to lack of endpoint and difficulty to simulate without such
    const deleteStory = e => {
        e.preventDefault()
        history.push("/dashboard")
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
            <h1>{null}</h1>
            <h2>{null}</h2>
            <h3>{null}</h3>
            <h3>{null}</h3>
            <p>{null}</p>
            <button onClick={deleteStory}>Delete</button>
        </section>
    )
}

const mapStatetoProps = state => {
    return {

        isLoading: state.isLoading,
        error: state.error,
        //from api
        stories: state.stories
    }
}

export default connect(mapStatetoProps, {fetchSingleStory})(Story)