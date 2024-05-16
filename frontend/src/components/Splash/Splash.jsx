import React, { useEffect } from 'react';
import React, { useEffect } from 'react';
import './Splash.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import HomeNav from '../HomeNav';

const Splash = () => {
  const navigate = useNavigate();
  const user = useSelector(state => state.session?.user);
  useEffect(() => {
    if (user) {
      navigate('/Home')
    }
  }, [user])

  return (
    <div className='homepage'>
      <HomeNav />
        <div className='homepage-intro'>
          <div className='homepage-intro-header'>
            <h1>Empower Parents, Elevate Education.</h1>
            <h2>Track, Monitor, and Nurture Your Child's Journey with Ease.</h2>
            <div className='homepage-intro-buttons'>
              <button id='join-button'>Join for free</button>
              <button id='learn-more-button'>Learn more</button>
            </div>
          </div>
          <div className='academe-logo-big'>
            <img src='../../assets/logo.jpg'></img>
          </div>
        </div>
        <div className='info'>
          <div className='info-header'>
            <h3>What we do</h3>
            <p>Academe is software that can be used to track a students academic progress and behavior. A parent can view their student's portal as well as receive feedback from teachers.</p>
          </div>
          <div className='info-cards'>
            <div className='info-card'>
              <h2>Homework Tracker</h2>
              <img></img>
              <p>Student homework completion can be displayed within the past 12 months.</p>
            </div>
            <div className='info-card'>
              <h2>Behavior Tracker</h2>
              <img></img>
              <p>Student behavior, warnings, incident reports, teacher notes can all be reviewed in the parent portal.</p>
            </div>
            <div className='info-card'>
              <h2>Take control as an administrator</h2>
              <img></img>
              <p>Review and edit a student's progress instantly!</p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Splash;
