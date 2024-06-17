import React from 'react'

const BotonNav = ({ nombreNav, url, icon, handleLogin }) => {
  return (
    <div style={{ paddingTop: '12px' }} >
      <a className="nav-link" onClick={handleLogin} href={url}>{icon}{nombreNav}</a>
    </div>
  )
}

export default BotonNav
