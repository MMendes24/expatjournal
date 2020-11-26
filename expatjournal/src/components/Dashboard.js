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
    img {
        width: 100%;
        height: 70%;
        border-radius: 10px;
    }

    font-size: 2.5rem;

    p {
        font-size: 1.5rem;
    }

    text-align: center;
    margin-bottom: 1%;
    font-family: 'Architects Daughter', cursive;
`
const StyledButton = styled.button`
  background-color: #005a87;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 1% 0%;
  transition-duration: 0.3s;

  &:hover {
    background-color: #4caf50;
    color: white;
  }
`

const Dashboard = props => {
    const history = useHistory()
    const { userId } = useParams()

    useEffect(() => {
        props.getStories(userId)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.body.length])

    useEffect(() => { // to make sure on refresh that the id is re inserted
        if (props.userId === '') {
            props.userId = localStorage.getItem('user_id')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className='dashboard-container'>
            {props.isLoading ? <h4>Loading your stories.. Please wait a moment.</h4> : null}
            {props.error ? <h4>There was an error <br /> {props.error}</h4> : null}
            {props.body.length > 0 ? (
                <DashStyled className='stories-container'>
                    {props.body.map(story => (
                        <StoryStyled onClick={() => history.push(`/story/${story.id}`)} className='story-card dashboard-img'>

                            <img
                                src={story.image_url || "https://source.unsplash.com/random"}
                                alt=""
                            />

                            <h2>{story.title}</h2>
                        </StoryStyled>
                    ))}
                </DashStyled>
            ) : <h4>Add your first story!</h4>}
            <div className='dashboard-footer'>
                <StyledButton onClick={() => history.push('/add-story')}>Add Story</StyledButton>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        isLoading: state.isLoading,
        body: state.body,
        error: state.error,
    }
}

export default connect(mapStateToProps, { getStories })(Dashboard)