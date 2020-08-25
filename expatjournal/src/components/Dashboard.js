import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getStories } from '../actions/getStories'
import { useHistory } from 'react-router-dom'

const Dashboard = () => {
    const history = useHistory()

    const props = null //added by Mars to test deployment

    useEffect(() => {
        props.getStories()
    },[])

    return (
        <div className='dashboard-container'>
        <h1>Welcome to the Dashboard </h1>
        <button onClick={() => history.push('/add-story')}>Add Story</button>

        {props.isLoading ? <h4>Loading your stories.. Please wait a moment.</h4> : null}
        {props.error ? <h4>There was an error <br/> {props.error}</h4> : null}
        {props.stories.length > 0 ? (
            <div className='stories-container'>
                {props.stories.map(story => (
                    <div className='story-card'>
                        <h2>{story.title}</h2>
                        <h4>{story.location}</h4>
                        <h6>{story.time}</h6>
                        <p>{story.story}</p>
                    </div>
                ))}
            </div>
        ): null}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.isLoading,
        stories: state.stories,
        error : state.error,
    }
} 

export default connect(mapStateToProps, {getStories})(Dashboard)