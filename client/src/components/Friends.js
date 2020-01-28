import React, { useState, useEffect } from 'react'
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

    return (
        <div>

        </div>
    )
}

export default Friends