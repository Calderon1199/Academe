import React from 'react';
import './HomeNav.css';
import { useSelector } from 'react-redux';

function HomeNav(props) {
    const user = useSelector(state => state.session.user);

    return (
        <div className='sidebar'>
            <div className='nav-bar-intro'>
                <img src='../../public/assets/letter-t.png' className='team-icon'></img>
                <div>
                    <h3>Team</h3>
                    <h3>Assist</h3>
                </div>
                <i class="fa-solid fa-circle-chevron-left"></i>
            </div>
            <div className='user-header'>
                <img src={user?.logo} style={{width: '50px', height: '50px'}}></img>
                <h5>{user?.name}</h5>
            </div>
            <div className='first-section-buttons'>
                <button><i class="fa-solid fa-chart-line"></i> My Activity</button>
                <button><i class="fa-regular fa-user"></i> My Profile</button>
            </div>
            <div className='pages'>
                <div className='pages-header'>
                    <h3>Pages</h3>
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
                <div className='second-section-buttons'>
                    <button><i class="fa-solid fa-house"></i> Dashboard</button>
                    <button><i class="fa-regular fa-folder"></i> Folders</button>
                    <button><i class="fa-regular fa-message"></i> Chat</button>
                    <button><i class="fa-regular fa-calendar-days"></i> Calendar</button>
                </div>
            </div>
            <div>
                <div>
                    <h3>Labels</h3>
                    <i class="fa-solid fa-chevron-up"></i>
                </div>
                <div className='second-section-buttons'>
                    <button><i class="fa-solid fa-bookmark"></i> Custom</button>
                    <button><i class="fa-solid fa-bookmark"></i> Custom</button>
                    <button><i class="fa-solid fa-bookmark"></i> Custom</button>
                    <button><i class="fa-solid fa-bookmark"></i> Cusotm</button>
                </div>
            </div>
        </div>
    );
}

export default HomeNav;
