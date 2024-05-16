import React, { useState } from 'react';
import './HomeNav.css';
import { useSelector } from 'react-redux';

function HomeNav(props) {
    const user = useSelector(state => state.session.user);
    const [closePages, setClosePages] = useState(false);
    const [closeLabels, setCloseLabels] = useState(false);
    const [closeMenu, setCloseMenu] = useState(true);



    return (
        <>
        {closeMenu ? (
            <>
                <div className='side-bar-mini'>
                <i class="fa-solid fa-angles-right close-chevron" id='expand-nav' style={{fontSize: '15px', }} onClick={() => setCloseMenu(!closeMenu)}></i>
                <img src='../../assets/letter-t.png' className='team-icon'></img>
                <img src={user?.logo} style={{width: '40px', height: '40px', borderRadius: '40px', objectFit: 'cover'}}></img>
                <i class="fa-solid fa-chart-line"></i>
                <i class="fa-regular fa-user"></i>
                <h4 style={{fontSize: '12px', color: 'black'}}>Pages</h4>
                <i class="fa-solid fa-house"></i>
                <i class="fa-regular fa-folder"></i>
                <i class="fa-regular fa-message"></i>
                <i class="fa-regular fa-calendar-days"></i>
                <h4 style={{fontSize: '12px', color: 'black'}}>Labels</h4>
                <i class="fa-solid fa-bookmark bk-high"></i>
                <i class="fa-solid fa-bookmark bk-medium"></i>
                <i class="fa-solid fa-bookmark bk-low"></i>
                <i class="fa-solid fa-bookmark bk-on-hold"></i>
            </div>
            </>
        ): (
            <div className='sidebar'>
                <div className='nav-bar-intro'>
                    <div className='profile-intro'>
                    <img src='../../assets/letter-t.png' className='team-icon'></img>
                    <div className='profile-names'>
                        <h4>Team</h4>
                        <p>Company Management</p>
                    </div>
                    </div>
                    {closeMenu ? (
                        <i class="fa-solid fa-angles-right close-chevron" onClick={() => setCloseMenu(!closeMenu)}></i>
                    ): (
                        <i class="fa-solid fa-angles-left close-chevron" onClick={() => setCloseMenu(!closeMenu)}></i>
                    )}
                </div>
                <div className='user-header'>
                    <img src={user?.logo} style={{width: '40px', height: '40px', borderRadius: '40px', objectFit: 'cover'}}></img>
                    <h5>{user?.name}</h5>
                </div>
                <div className='first-section-buttons'>
                    <button><i class="fa-solid fa-chart-line"></i> Activity</button>
                    <button><i class="fa-regular fa-user"></i> My Profile</button>
                </div>
                <div className='pages'>
                    <div className='pages-header'>
                        <h4>PAGES</h4>
                        {closePages ? (
                            <i class="fa-solid fa-chevron-down close-chevron" onClick={() => setClosePages(!closePages)}></i>
                        ): (
                            <i class="fa-solid fa-chevron-up close-chevron" onClick={() => setClosePages(!closePages)}></i>
                        )}
                    </div>
                    {!closePages && (
                        <div className='second-section-buttons'>
                            <button><i class="fa-solid fa-house"></i> Dashboard</button>
                            <button><i class="fa-regular fa-folder"></i> Folders</button>
                            <button><i class="fa-regular fa-message"></i> Chat</button>
                            <button><i class="fa-regular fa-calendar-days"></i> Calendar</button>
                        </div>
                    )}
                </div>
                <div>
                    <div className='labels-header'>
                        <h4>LABELS</h4>
                        {closeLabels ? (
                            <i class="fa-solid fa-chevron-down close-chevron" onClick={() => setCloseLabels(!closeLabels)}></i>
                        ): (
                            <i class="fa-solid fa-chevron-up close-chevron" onClick={() => setCloseLabels(!closeLabels)}></i>
                        )}
                    </div>
                    {!closeLabels && (
                        <div className='second-section-buttons'>
                            <button><i class="fa-solid fa-bookmark bk-high"></i> Custom</button>
                            <button><i class="fa-solid fa-bookmark bk-medium"></i> Custom</button>
                            <button><i class="fa-solid fa-bookmark bk-low"></i> Custom</button>
                            <button><i class="fa-solid fa-bookmark bk-on-hold"></i> Custom</button>
                        </div>
                    )}
                </div>
            </div>
            )}
        </>
    );
}

export default HomeNav;
