import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import './Head.css'
import { IconButton } from '@mui/material';
function Head() {
  return (
    <div className='tinder-header'>
      <IconButton className='head-icon' fontSize='large' >
       <PermIdentityIcon className='head-icon' fontSize='large'/>
      </IconButton>
      <IconButton>
    <img src='https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png'/>
    </IconButton>
    <IconButton className='msg-icon' fontSize='large'>
    <ChatBubbleOutlineIcon className='msg-icon' fontSize='large'/> 
    </IconButton>
    </div>
  
  )
}

export default Head