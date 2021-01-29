import React from 'react'
import Button from '@material-ui/core/Button'
import { CircularProgress, makeStyles } from '@material-ui/core'

const LoadingButton = (props) => {
  const styleClasses = useStyles()
  const { loading, disabled, classes, children, ...buttonProps } = props

  return (
    <Button
      classes={{ ...classes, root: { ...classes, ...styleClasses.root } }}
      {...buttonProps}
      disabled={loading || disabled}
    >
      {children}
      {loading && (
        <CircularProgress
          classes={{ root: styleClasses.progressRoot }}
          size={19}
          aria-busy={true}
          style={{ color: '#fff' }}
        />
      )}
    </Button>
  )
}

const useStyles = makeStyles({
  root: {
    position: 'relative'
  },
  progressRoot: {
    position: 'absolute'
  }
})

export default LoadingButton
