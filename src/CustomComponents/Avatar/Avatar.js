import React from 'react'
import { Avatar, withStyles } from '@material-ui/core'
import clsx from 'clsx'

const CustomAvatar = withStyles((theme) => ({
  root: {
    width: '20px',
    height: '20px',
    '&.small svg': {
      fontSize: '1rem'
    }
    // '&.normal':{
    //   fontSize:
    // }
  }
}))(({ children, size, className, ...props }) => (
  <Avatar className={clsx(className, size)} {...props}>
    {children}
  </Avatar>
))

export default CustomAvatar
