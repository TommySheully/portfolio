import * as React from 'react'

import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import { connect } from 'react-redux'
import { RootState } from 'app/store'
import { setAppStatusAC, setIsOpenAC, StatusType } from 'common'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})

type propsType = mapStateToPropsType & mapDispatchToPropsType

type mapStateToPropsType = { status: StatusType; isOpen: boolean }
type mapDispatchToPropsType = {
  setAppStatusAC: (payload: StatusType) => void
  setIsOpenAC: (payload: boolean) => void
}

function ErrorSnackbar({ setIsOpenAC, isOpen, setAppStatusAC, status }: propsType) {
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setIsOpenAC(false)
    setAppStatusAC(null)
  }

  const severity = status === 'failed' ? 'error' : 'success'
  const message =
    status === 'failed' ? 'Sorry, there was an error.\n' + 'Perhaps the form is filled incorrectly.' : 'success'

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={isOpen} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  )
}

const mapStateToProps = (state: RootState): mapStateToPropsType => {
  return {
    status: state.app.status,
    isOpen: state.app.isOpen
  }
}

export const ErrorSnackbarContainer = connect<mapStateToPropsType, mapDispatchToPropsType, {}, RootState>(
  mapStateToProps,
  {
    setIsOpenAC,
    setAppStatusAC
  }
)(ErrorSnackbar)
