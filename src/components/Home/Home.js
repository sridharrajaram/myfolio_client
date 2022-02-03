import React from 'react';
import './Home.css';
import BorderCurve from './BorderCurve/BorderCurve';
import Profile from './Profile/Profile';

function Home(props) {
    
    const myProfileDetails = props.details;
    const scrollToAbout = props.sTA;
    const scrollToContactme = props.sTC;
    return (
        <div className="home_container">
             <Profile STA ={scrollToAbout} STC={scrollToContactme} details={myProfileDetails}/>
             <BorderCurve />
        </div>
    )
}

export default Home
