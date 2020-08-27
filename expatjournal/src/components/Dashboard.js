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
    height: 70%;
    border-radius: 10px;
}
font-size: 2.5rem;
p{
    font-size: 1.5rem;
}
text-align: center;
margin-bottom: 1%;
font-family: 'Patrick Hand', cursive;
button{
    width: 100%;
}
`

const Dashboard = props => {
    const history = useHistory()
    const { userId } = useParams()
    console.log(userId)
    useEffect(() => {
        props.getStories(userId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[props.body.length])

    useEffect(() => { // to make sure on refresh that the id is re inserted
        if(props.userId === ''){
            props.userId = localStorage.getItem('user_id')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='dashboard-container'>
        <div className='dashboard-header'>
        <h1>Welcome to the Dashboard </h1>
        <br/>
        <button className='button'onClick={() => history.push('/add-story')}>Add Story</button>
        </div>

        {props.isLoading ? <h4>Loading your stories.. Please wait a moment.</h4> : null}
        {props.error ? <h4>There was an error <br/> {props.error}</h4> : null}
        {props.body.length > 0 ? (
            <DashStyled className='stories-container'>
                {props.body.map(story => (

                    <StoryStyled onClick={() => history.push(`/story/${story.id}`)} className='story-card story-img'>



                        <img
                        src={story.image_url || "https://source.unsplash.com/random"}
                        />
                        <h2>{story.title}</h2>
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