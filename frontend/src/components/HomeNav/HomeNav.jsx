import React, { useEffect, useState } from 'react';
import './HomeNav.css';
import { useDispatch, useSelector } from 'react-redux';
import { thunkLogout } from '../../redux/session';
import { useNavigate } from 'react-router-dom';

function HomeNav(props) {
    const user = useSelector(state => state.session?.user);
    console.log(user, 'blah');
    const [closePages, setClosePages] = useState(false);
    const [closeLabels, setCloseLabels] = useState(false);
    const [closeMenu, setCloseMenu] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

    }, [user])

    const logout = async (e) => {
        e.preventDefault();

        try {
            await dispatch(thunkLogout());
            navigate('/')
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
        {closeMenu ? (
            <>
                <div className='side-bar-mini'>
                <i className="fa-solid fa-angles-right close-chevron" id='expand-nav' style={{fontSize: '15px', }} onClick={() => setCloseMenu(!closeMenu)}></i>
                <img src='../../assets/letter-t.png' className='team-icon'></img>
                <img src={user?.avatarUrl || user?.logo} style={{width: '40px', height: '40px', borderRadius: '40px', objectFit: 'cover'}} className='user-avi'></img>
                <i className="fa-solid fa-chart-line"></i>
                <i className="fa-regular fa-user"></i>
                <h4 style={{fontSize: '12px', color: 'black'}}>Pages</h4>
                <i className="fa-solid fa-house" onClick={() => navigate('/dashboard')}></i>
                <i className="fa-regular fa-folder"></i>
                <i className="fa-regular fa-file-lines" onClick={() => navigate('/reports')}></i>
                <i className="fa-regular fa-message"></i>
                <i className="fa-regular fa-calendar-days" onClick={() => navigate('/calendar')}></i>
                <h4 style={{fontSize: '12px', color: 'black'}}>Labels</h4>
                <i className="fa-solid fa-bookmark bk-high"></i>
                <i className="fa-solid fa-bookmark bk-medium"></i>
                <i className="fa-solid fa-bookmark bk-low"></i>
                <i className="fa-solid fa-bookmark bk-on-hold"></i>
                <hr className='solid'></hr>
                <i class="fa-solid fa-arrow-right-from-bracket" onClick={(e) => logout(e)}></i>
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
                        <i className="fa-solid fa-angles-right close-chevron" onClick={() => setCloseMenu(!closeMenu)}></i>
                    ): (
                        <i className="fa-solid fa-angles-left close-chevron" onClick={() => setCloseMenu(!closeMenu)}></i>
                    )}
                </div>
                <div className='user-header'>
                    <img src={user?.avatarUrl || user?.logo} style={{width: '40px', height: '40px', borderRadius: '40px', objectFit: 'cover'}} className='user-avi'></img>
                    <h5>{user?.name || `${user?.firstName} ${user?.lastName}`}</h5>
                </div>
                <div className='first-section-buttons'>
                    <button><i className="fa-solid fa-chart-line"></i> Activity</button>
                    <button><i className="fa-regular fa-user"></i> My Profile</button>
                </div>
                <div className='pages'>
                    <div className='pages-header'>
                        <h4>PAGES</h4>
                        {closePages ? (
                            <i className="fa-solid fa-chevron-down close-chevron" onClick={() => setClosePages(!closePages)}></i>
                        ): (
                            <i className="fa-solid fa-chevron-up close-chevron" onClick={() => setClosePages(!closePages)}></i>
                        )}
                    </div>
                    {!closePages && (
                        <div className='second-section-buttons'>
                            <button><i className="fa-solid fa-house" onClick={() => navigate('/dashboard')}></i> Dashboard</button>
                            <button><i className="fa-regular fa-folder"></i> Folders</button>
                            <button onClick={() => navigate('/reports')}><i className="fa-regular fa-file-lines"></i> Reports</button>
                            <button><i className="fa-regular fa-message"></i> Chat</button>
                            <button><i className="fa-regular fa-calendar-days" onClick={() => navigate('/dashboard')}></i> Calendar</button>
                        </div>
                    )}
                </div>
                <div>
                    <div className='labels-header'>
                        <h4>LABELS</h4>
                        {closeLabels ? (
                            <i className="fa-solid fa-chevron-down close-chevron" onClick={() => setCloseLabels(!closeLabels)}></i>
                        ): (
                            <i className="fa-solid fa-chevron-up close-chevron" onClick={() => setCloseLabels(!closeLabels)}></i>
                        )}
                    </div>
                    {!closeLabels && (
                        <div className='second-section-buttons'>
                            <button><i className="fa-solid fa-bookmark bk-high"></i> Custom</button>
                            <button><i className="fa-solid fa-bookmark bk-medium"></i> Custom</button>
                            <button><i className="fa-solid fa-bookmark bk-low"></i> Custom</button>
                            <button><i className="fa-solid fa-bookmark bk-on-hold"></i> Custom</button>
                        </div>
                    )}
                    <hr className='solid'></hr>
                    <div className='quick-bar-buttons'>
                        <i class="fa-solid fa-arrow-right-from-bracket" onClick={(e) => logout(e)}><p>Sign Out</p></i>
                    </div>
                </div>
            </div>
            )}
        </>
    );
}

export default HomeNav;
