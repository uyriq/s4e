import { Affix, Burger, Center, Container, Flex, Group, Footer, Text, Space } from '@mantine/core'
import PropTypes from 'prop-types'
import useResizeObserver from 'use-resize-observer'
import useResizeLogic from './use-resize-logic'

import SwithElement from './switch-element'

function AppFooter() {
    const { reSize } = useResizeLogic()
    /* eslint-disable */
    const { ref: wrapperRef, width, height } = useResizeObserver<HTMLDivElement>()
    /* eslint-enable */
    return (
        <div>
            <Container size={reSize} px={0} ref={wrapperRef}>
                <Footer height={{ base: 50, md: 70, lg: 90, xl: 120 }} p={reSize}>
                    <Center>
                        <SwithElement />
                    </Center>
                </Footer>
            </Container>
        </div>
    )
}

AppFooter.propTypes = {
    opened: PropTypes.bool,
    setOpened: PropTypes.func,
}

export default AppFooter
