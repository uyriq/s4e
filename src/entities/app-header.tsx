import { Affix, Burger, Center, Container, Flex, Header, Text, Space } from '@mantine/core'
import PropTypes from 'prop-types'
import useResizeObserver from 'use-resize-observer'
import useResizeLogic from '../features/use-resize-logic'
import ToggleThemeIcon from '../features/toggle-theme-icon'
import SwithElement from '../features/switch-element'

function AppHeader() {
    const { reSize } = useResizeLogic()
    /* eslint-disable */
    const { ref: wrapperRef, width, height } = useResizeObserver<HTMLDivElement>()
    /* eslint-enable */
    return (
        <div>
            <Container size={reSize} px={0} ref={wrapperRef}>
                <Header height={{ base: 50, md: 70, lg: 90, xl: 120 }} p={reSize}>
                    <Center>
                        <ToggleThemeIcon size={reSize} />
                    </Center>
                </Header>
            </Container>
        </div>
    )
}

AppHeader.propTypes = {
    opened: PropTypes.bool,
    setOpened: PropTypes.func,
}

export default AppHeader
