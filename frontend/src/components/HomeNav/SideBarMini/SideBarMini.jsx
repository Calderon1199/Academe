import './SideBarMini.css';


function SideBarMini({user}) {
    return (
        <div className='side-bar-mini'>
            <i class="fa-solid fa-angles-right close-chevron" style={{fontSize: '15px', }} onClick={() => setCloseMenu(!closeMenu)}></i>
            <img src='../../public/assets/letter-t.png' className='team-icon'></img>
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
    );
}

export default SideBarMini;
