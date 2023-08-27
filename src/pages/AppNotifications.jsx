import React from 'react'
import NotificationComponent from '../components/NotificationComponent'
import useAuth from '../helper/useAuth'

const AppNotifications = () => {
    useAuth();
  return (
    <div>
      <NotificationComponent/>
    </div>
  )
}

export default AppNotifications
