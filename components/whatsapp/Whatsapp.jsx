'use client'
import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex justify-end items-end sm:bottom-8 sm:right-8">
      <FloatingWhatsApp
        phoneNumber="+917867837866"
        accountName="AF Auto Gloss"
        avatar="/company/AF.png" // ✅ Ensure this path is correct
        statusMessage="Typically replies within 1hr"
        chatMessage="Hello there! 🤝 How can we help?"
        placeholder="Type a message.."
        darkMode={false} // ✅ You can toggle this based on theme
        allowClickAway={false}
        allowEsc={false}
        height={350}
        notification={true}
        notificationDelay={18000}
        notificationSound={false} // ✅ Optional
        className="custom-whatsapp-chatbox"
        styles={{
          boxShadow: '0 4px 24px rgba(0,0,0,0.18)',
          borderRadius: '18px',
          overflow: 'hidden',
        }}
      />
    </div>
  )
}

export default Whatsapp
