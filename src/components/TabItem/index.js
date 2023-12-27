// Write your code here
import React from 'react'
import './index.css'

const TabItem = ({tabId, displayText, activeTab, onClick}) => {
  const isActive = activeTab === tabId

  const handleTabClick = () => {
    onClick(tabId)
  }

  return (
    <button
      className={`tab-item ${isActive ? 'active-tab' : ''}`}
      onClick={handleTabClick}
    >
      {displayText}
    </button>
  )
}

export default TabItem
