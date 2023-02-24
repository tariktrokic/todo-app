import { Box, Typography, Checkbox, CircularProgress } from '@mui/material'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import axios from 'axios'

type Task = {
    title: string
    createdAt: string
    id: string
    details: string
    due: null
    isCompleted: boolean
}

type GetTasksResponse = {
    results: Task[]
}

const ListTasksPage = () => {
    const [tasks, setTasks] = useState<Task[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .get<GetTasksResponse>('https://todo.crudful.com/tasks')
            .then((result) => {
                setIsLoading(false)
                setTasks(result.data.results)
            })
    }, [])

    const toggleTaskIsCompleted = (taskId: string, value: boolean) => {
        axios
            .patch(`https://todo.crudful.com/tasks/${taskId}`, {
                isCompleted: value,
            })
            .then((res) => console.log(res))
            .catch((e) => console.log(e))
    }

    return (
        <>
            <Typography variant="h3" component="h1" align="center" pt={3}>
                List Tasks
            </Typography>

            <Box
                my={3}
                sx={{
                    display: 'flex',
                }}
            >
                <Link href="/">
                    <Typography mr={3} paragraph>
                        Home
                    </Typography>
                </Link>
                <Link href="add_tasks">
                    <Typography paragraph>Add tasks</Typography>
                </Link>
            </Box>

            {tasks.length > 0 ? (
                tasks.map((task) => (
                    <Box
                        sx={{
                            backgroundColor: 'white',
                            padding: 3,
                            display: 'flex',
                            alignItems: 'center',
                            width: '90%',
                            marginBottom: 3,
                        }}
                        key={task.id}
                    >
                        <Checkbox
                            onChange={(event) => {
                                toggleTaskIsCompleted(
                                    task.id,
                                    event.target.checked
                                )
                            }}
                            defaultChecked={task.isCompleted}
                        />
                        {task.title}
                    </Box>
                ))
            ) : isLoading ? (
                <CircularProgress />
            ) : (
                'No tasks available'
            )}
        </>
    )
}

export default ListTasksPage
