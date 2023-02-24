import { Box, Typography } from '@mui/material'
import { Roboto } from 'next/font/google'
import Link from 'next/link'

const Home = () => {
    return (
        <>
            <Typography variant="h3" component="h1" align="center" pt={3}>
                Welcome To The Todo App!
            </Typography>

            <Box
                mt={3}
                sx={{
                    display: 'flex',
                }}
            >
                <Link href="list_tasks">
                    <Typography mr={3} paragraph>
                        List Tasks
                    </Typography>
                </Link>
                <Link href="add_tasks">
                    <Typography paragraph>Add Tasks</Typography>
                </Link>
            </Box>
        </>
    )
}

export default Home
