import React from 'react';
import Login from './Login';
import Logout from './Logout';

function Home({status}) {
    const StatusCheck = () => {
        if (status){
            return <Login />
        } else {
            return <Logout />
        }
    }
    return(
        <StatusCheck/>
    )
}

export default Home;