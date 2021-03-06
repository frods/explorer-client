import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import { Main } from '../../components'
import { styles } from './style'

const Loading = ({ navbar: Navbar, history, classes }) => (
  <Fragment>
    <Navbar history={history} />
    <Main className={classes.main}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width={50} height={50}
        viewBox="0 0 50 50"
        xmlSpace="preserve"
      >
        <path
          fill="#d02d52"
          d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
        >
          <animateTransform attributeType="xml"
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </Main>
  </Fragment>
)

Loading.propTypes = {
  navbar: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Loading)
