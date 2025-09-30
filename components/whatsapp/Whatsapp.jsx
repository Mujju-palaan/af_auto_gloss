'use client'
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'


const Whatsapp = () => {
  return (
  <div style={{ position: 'fixed', bottom: '32px', right: '32px', zIndex: 1000, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
    <FloatingWhatsApp  
      phoneNumber='+917867837866'
      accountName='AF Auto Gloss'
      avatar='/company/AF.png'
      statusMessage='Typically replies with in 1hr'
      chatMessage='Hello there! 🤝 How can we help?'
      placeholder='Type a message..'
      darkMode={false}
      allowClickAway={false}
      allowEsc={false}
      height={350}
      notification={true}
      notificationDelay={18000}
      notificationSound={true}
      className='custom-whatsapp-chatbox'
      styles={{ boxShadow: '0 4px 24px rgba(0,0,0,0.18)'
        , borderRadius: '18px', overflow: 'hidden' }}
    />
  </div>
  )
}

export default Whatsapp