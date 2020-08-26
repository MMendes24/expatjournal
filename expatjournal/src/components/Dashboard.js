import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getStories } from '../actions/getStories'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const DashStyled = styled.div`
display:flex;
flex-wrap:wrap;
justify-content: space-around;
`
const StoryStyled = styled.div`
width: 24%;
img{
    width: 100%;
    height: 50%;
    border-radius: 10px;
}
text-align: center;
`


const Dashboard = props => {
    const history = useHistory()
    const { userId } = useParams()
    console.log(userId)
    useEffect(() => {
        props.getStories(userId)
    },[props.body.length])

    useEffect(() => { // to make sure on refresh that the id is re inserted
        if(props.userId === ''){
            props.userId = localStorage.getItem('id')
        }
    }, [])
    return (
        <div className='dashboard-container'>
        <h1>Welcome to the Dashboard </h1>
        <button onClick={() => history.push('/add-story')}>Add Story</button>

        {props.isLoading ? <h4>Loading your stories.. Please wait a moment.</h4> : null}
        {props.error ? <h4>There was an error <br/> {props.error}</h4> : null}
        {props.body.length > 0 ? (
            <DashStyled className='stories-container'>
                {props.body.map(story => (
                    <StoryStyled className='story-card'>
                        <img
                        src={story.image_url || "https://source.unsplash.com/random"}
                        />
                        <h2>{story.title}</h2>
                        {/* <h4>{story.location}</h4>
                        <h6>{story.updated_at}</h6>
                        <p>{story.body}</p> */}
                    </StoryStyled>
                ))}
            </DashStyled>
        ): <h3>Add your first story!</h3>}
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