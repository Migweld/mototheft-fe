import React from 'react'
import PropTypes from 'prop-types'

const HomepageBox = ({icon, title, subtitle}) => {
  return (
    <div>
      <img src={icon} alt="Box Icon"/>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </div>
  )
}

HomepageBox.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

export default HomepageBox
