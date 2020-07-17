import React from 'react';
import '../App.css';
import SocialProfiles from './SocialProfiles'
import profile from '../assets/profile.png'
import Title from './Titles'


function App() {
    return (
        <div className="App">
            <img src={profile} className='profile'/>
            <h2>Hello !</h2>
            {
                <div>
                    <h3>Im Srinath Mahagama</h3>
                    <Title/>
                </div>
            }
            <hr/>
            <hr/>
            <SocialProfiles/>
        </div>

    );
}

export default App;
