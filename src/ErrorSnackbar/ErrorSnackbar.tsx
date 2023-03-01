import * as React from 'react'

import MuiAlert, { AlertProps } from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'
import Stack from '@mui/material/Stack'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../App/story";
import {setAppStatusAC, setIsOpenAC} from "../App/app-slice";


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export function ErrorSnackbar() {

    const status = useSelector<RootState>(state => state.app.status)
    const isOpen = useSelector<RootState, boolean>(state => state.app.isOpen)

    const dispatch = useDispatch()

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        }
        dispatch(setIsOpenAC(false))
        dispatch(setAppStatusAC(null))
    }

    const severity = status === 'failed' ? 'error' : 'success'
    const message = status === 'failed' ? 'Sorry, there was an error.\n' +
        'Perhaps the form is filled incorrectly.' : 'success'


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