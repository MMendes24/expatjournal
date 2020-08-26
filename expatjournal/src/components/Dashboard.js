import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getStories } from '../actions/getStories'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const Dashboard = props => {
    const history = useHistory()
    const { userId } = useParams()
    console.log(userId)
    useEffect(() => {
        props.getStories(userId)
    },[props.body.length])

    return (
        <div className='dashboard-container'>
        <h1>Welcome to the Dashboard </h1>
        <button onClick={() => history.push('/add-story')}>Add Story</button>

        {props.isLoading ? <h4>Loading your stories.. Please wait a moment.</h4> : null}
        {props.error ? <h4>There was an error <br/> {props.error}</h4> : null}
        {props.body.length > 0 ? (
            <div className='stories-container'>
                {props.body.map(story => (
                    <div className='story-card'>
                        <h2>{story.title}</h2>
                        <h4>{story.location}</h4>
                        <h6>{story.updated_at}</h6>
                        <p>{story.body}</p>
                    </div>
                ))}
            </div>
        ): null}
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isLoading: state.isLoading,
        body: state.body,
        error : state.error,
    }
} 

export default connect(mapStateToProps, {getStories})(Dashboard)