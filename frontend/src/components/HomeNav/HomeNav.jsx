import React from 'react';
import './HomeNav.css';
import { useSelector } from 'react-redux';

function HomeNav(props) {
    const user = useSelector(state => state.session.user);

    return (
        <div>
            <div className='nav-bar-intro'>
                <img src='../../public/assets/letter-t.png' className='team-icon'></img>
                <div>
                    <h3>Team</h3>
                    <h3>Assist</h3>
                </div>
                <i class="fa-solid fa-circle-chevron-left"></i>
            </div>
            <div>
                <img></img>
                <h5>{user?.name}</h5>
            </div>
        </div>
    );
}

export default HomeNav;
