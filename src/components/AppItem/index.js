import React from 'react'
import './index.css'

const AppItem = ({appName, imageUrl, alt}) => {
  return (
    <div className="app-item">
      <img className="app-image" src={imageUrl} alt={alt} />
      <p className="app-name">{appName}</p>
    </div>
  )
}

export default AppItem
