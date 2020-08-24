import React from 'react'
import { connect } from 'react-redux'
import { getStories } from '../actions/getStories'

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
        <h1>Welcome to the Dashboard </h1>
            <div>
                <h3>Stories go here</h3>
            </div>
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