import './SideBarMini.css';


function SideBarMini({user}) {
    return (
        <div className='side-bar-mini'>
            <i className="fa-solid fa-angles-right close-chevron" style={{fontSize: '15px', }} onClick={() => setCloseMenu(!closeMenu)}></i>
            <img src='../../public/assets/letter-t.png' className='team-icon'></img>
            <img src={user?.logo} style={{width: '40px', height: '40px', borderRadius: '40px', objectFit: 'cover'}}></img>
            <i className="fa-solid fa-chart-line"></i>
            <i className="fa-regular fa-user"></i>
            <h4 style={{fontSize: '12px', color: 'black'}}>Pages</h4>
            <i className="fa-solid fa-house"></i>
            <i className="fa-regular fa-folder"></i>
            <i className="fa-regular fa-message"></i>
            <i className="fa-regular fa-calendar-days"></i>
            <h4 style={{fontSize: '12px', color: 'black'}}>Labels</h4>
            <i className="fa-solid fa-bookmark bk-high"></i>
            <i className="fa-solid fa-bookmark bk-medium"></i>
            <i className="fa-solid fa-bookmark bk-low"></i>
            <i className="fa-solid fa-bookmark bk-on-hold"></i>
        </div>
    );
}

export default SideBarMini;
