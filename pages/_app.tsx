import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Container, Box, Typography } from '@mui/material'
import { Roboto } from 'next/font/google'
import axios from 'axios'

const robotoFont = Roboto({ weight: '400', subsets: ['latin'] })

axios.defaults.headers.common['cfAccessKey'] =
    '3d4567407ae7682a5b443cd934672b05d6b75ad8'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Todo App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container
                className={robotoFont.className}
                maxWidth="lg"
                sx={{
                    bgcolor: '#cfe8fc',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Component {...pageProps} />
            </Container>
        </>
    )
}
