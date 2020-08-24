import React, { useEffect, useState,  } from "react";
import axiosWithAuth from '../utils/axiosWithAuth'
import { useParams, useHistory } from "react-router-dom";

const Story = () => {

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

    return (
        <section>
            <img href="#" alt="nolo"/>
            <h2>{null}</h2>
            <h3>{null}</h3>
            <p>{null}</p>
        </section>
    )
}

