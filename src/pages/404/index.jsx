import { useEffect } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { createStyles, Box, Center } from '@mantine/core'

import { Breadcrumbs, Anchor } from '@mantine/core'

const NotFound404 = function NotFound404() {
    const navigate = useNavigate() //TODO
    const { pathname } = useLocation()
    const useStyles = createStyles((theme) => ({
        container: {
            height: 100,
            backgroundColor: theme.colors.blue[6],

            // Media query with value from theme
            [`@media (max-width: ${theme.breakpoints.xl}px)`]: {
                backgroundColor: theme.colors.blue[6],
            },
        },
    }))

    //  active={pathname.pathname === item.link}

    const { styles } = useStyles()

    const routes = [
        { title: 'Home', href: '/' },
        { title: pathname.split('/'), href: pathname },
    ].map((item, index) => (
        <Anchor href={item.href} key={index}>
            {item.title}
        </Anchor>
    ))

    return (
        <>
            <Center>
                <Breadcrumbs>{routes}</Breadcrumbs>
            </Center>
            <Center>
                <h1>Oops! 404 Error</h1>
            </Center>
            <Center>
                <h1>{pathname.trim().slice(1, -1)}</h1>
            </Center>
            <Center>The page you requested does not exist</Center>
            <Center>
                <Box
                    component={Link}
                    to="/"
                    sx={(theme) => ({
                        fontSize: theme.fontSizes.md,
                        [`@media (max-width: ${theme.breakpoints.md}px)`]: {
                            fontSize: theme.fontSizes.lg,
                        },
                    })}
                >
                    перейти на основную страницу
                </Box>
            </Center>
        </>
    )
}

export default NotFound404
