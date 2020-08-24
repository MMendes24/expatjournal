import React, { useEffect, useState,  } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'
import { connect } from 'react-redux'
import { useParams, useHistory } from "react-router-dom";

const Story = () => {

    //fetch the individual Story to display when a story is clicked on in the Dashboard
    const fetchStory = () => {
        axiosWithAuth()
        .get("")
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.error("Error from inside fetchStory, Story component")
        })
    }

    //story functionality (delete), functionality missing due to lack of endpoint and difficulty to simulate without such
    const deleteStory = e => {
        e.preventDefault()
    }

    return (
        <section>
            <img href="#" alt="nolo"/>
            <h2>{null}</h2>
            <h3>{null}</h3>
            <p>{null}</p>
        </section>
    )
}

export default connect(null, {})(Story)