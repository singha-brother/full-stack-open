import React, { useEffect } from 'react'

const NotiMessage = ({ notification, setNotification }) => {
  useEffect(() => {
    setTimeout(() => {
      setNotification('')
    }, 3000)
  }, [notification])

  return notification && <div className="notification">{notification}</div>
}

export default NotiMessage
