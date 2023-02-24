import {
    Box,
    Typography,
    FormControl,
    TextField,
    Button,
    Snackbar,
    Alert,
} from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'

const AddTasksPage = () => {
    const [taskTitle, setTaskTitle] = useState('')
    const [openSuccessModal, setOpenSuccessModal] = useState(false)
    const [openErrorModal, setOpenErrorModal] = useState(false)

    const onSubmit = () => {
        axios
            .post('https://todo.crudful.com/tasks', {
                title: taskTitle,
            })
            .then((res) => setOpenSuccessModal(true))
            .catch((e) => console.log(e))
    }

    return (
        <>
            <Typography variant="h3" component="h1" align="center" pt={3}>
                Add Tasks
            </Typography>

            <Box
                mt={3}
                sx={{
                    display: 'flex',
                }}
            >
                <Link href="/">
                    <Typography mr={3} paragraph>
                        Home
                    </Typography>
                </Link>
                <Link href="list_tasks">
                    <Typography paragraph>List tasks</Typography>
                </Link>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '50%',
                }}
            >
                <FormControl
                    sx={{
                        mb: 3,
                    }}
                >
                    <TextField
                        value={taskTitle}
                        onChange={(e) => setTaskTitle(e.target.value)}
                        label="Task Title"
                    />
                </FormControl>

                <Button variant="contained" onClick={onSubmit}>
                    Submit
                </Button>
            </Box>

            <Snackbar
                open={openSuccessModal}
                autoHideDuration={3000}
                onClose={() => setOpenSuccessModal(false)}
            >
                <Alert
                    onClose={() => setOpenSuccessModal(false)}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    Sucessfully created task!
                </Alert>
            </Snackbar>

            <Snackbar
                open={openErrorModal}
                autoHideDuration={3000}
                onClose={() => setOpenErrorModal(false)}
            >
                <Alert
                    onClose={() => setOpenErrorModal(false)}
                    severity="error"
                    sx={{ width: '100%' }}
                >
                    Something went wrong!
                </Alert>
            </Snackbar>
        </>
    )
}

export default AddTasksPage
