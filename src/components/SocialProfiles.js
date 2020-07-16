import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles'

const SocialProfile = props => {
    console.log(props.socialProfile);
    const {link, image} = props.socialProfile;
    return (
        <div className='item'>
            <a href={link}>
                <img src={image} alt='Profile-Social' style={{width: 35, height: 35}}/>
            </a>
        </div>
    )
};

const SocialProfiles = () => (
    <div>
        <h2>Connect wih me !</h2>
        <div className='list-display'>
            {
                SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                    return <SocialProfile
                        key={SOCIAL_PROFILE.id}
                        socialProfile={SOCIAL_PROFILE}/>
                })
            }
        </div>
    </div>
);

export default SocialProfiles;