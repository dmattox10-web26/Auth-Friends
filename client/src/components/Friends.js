import React, { useState, useEffect } from 'react'
import { Container, Jumbotron, CarouselIndicators } from 'reactstrap'
import cuid from 'cuid'
import { axiosWithAuth } from '../tools/axiosWithAuth'

import Friend from './Friend'

const Friends = props => {
    const [friends, updateFriends] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axiosWithAuth()
            .get('/api/friends')
            .then(res => updateFriends(res.data))
            .catch(err => console.log(err))
    }

    const deleteFriend = id => {
        axiosWithAuth()
            .delete(`/api/friends/${id}`)
            .then(getData())
    }

    const editFriend = values => {
        axiosWithAuth()
            .put(`/api/friends/${values.id}`, values)
            .then(getData())
    }

    return (
        <Container>
            <div className='spacer'></div>
            <Jumbotron>
                { friends.map(friend => 
                    <Friend friend={ friend } deleteFriend={ deleteFriend } editFriend={ editFriend } key={ cuid() } />
                )}
            </Jumbotron>
        </Container>
    )
}

export default Friends