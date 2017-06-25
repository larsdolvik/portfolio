import React from 'react'
import {IndexLink, Link} from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({children}) => (

  <div className='container text-center'>
    <h1>Lars Bendik Dølvik</h1>
    <IndexLink to='/' activeClassName='page-layout__nav-item--active'>
      <button className="button">Home</button>
    </IndexLink>
    {' · '}
    <Link to='/projects' activeClassName='page-layout__nav-item--active'>
      <button className="button">Projects</button>
    </Link>
    {' · '}
    <Link to='/aboutme' activeClassName='page-layout__nav-item--active'>
      <button className="button">About me</button>
    </Link>
    {/* <Link to='/counter' activeClassName='page-layout__nav-item--active'><button className="button">Counter</button></Link> */}
    <div className='page-layout__viewport'>
      {children}
    </div>
    <footer>
      Made by Lars Dølvik
    </footer>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
