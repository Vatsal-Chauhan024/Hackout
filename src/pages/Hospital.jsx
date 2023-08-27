import React from 'react'
import useAuth from '../helper/useAuth'

const Hospital = () => {
  useAuth();
  return (
    <div>
      <AddUsers/>
    </div>
  )
}

export default Hospital
