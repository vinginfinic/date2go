import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import IconButton from '@mui/material/IconButton';

function Header() {
    return(
        <div className='header'>
            <IconButton><PersonIcon className='header__icon' fontSize='large' /></IconButton>
            <img className='header__logo' src='https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png' alt='Logo' />
            <IconButton><ChatBubbleIcon className='header__icon' fontSize='large' /></IconButton>
        </div>
    );
}

export default Header;