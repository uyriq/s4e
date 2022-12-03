import { Affix, Burger, Center, Container, Flex, Group, Footer, Text, Space } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import PropTypes from 'prop-types'
import useResizeObserver from 'use-resize-observer'
import useResizeLogic from '../features/use-resize-logic'

import SwithElement from '../features/switch-element'
import ChipControlled from '../features/controlled-chip'

function AppFooter() {
    const { reSize } = useResizeLogic()

    const [isRandomFname, setFname] = useLocalStorage({ key: 'isRandomFname', defaultValue: false })

    /* eslint-disable */
    const { ref: wrapperRef, width, height } = useResizeObserver<HTMLDivElement>()
    /* eslint-enable */
    return (
        <div>
            <Container size={reSize} px={0} ref={wrapperRef}>
                <Footer height={{ base: 50, md: 70, lg: 90, xl: 120 }} p={reSize}>
                    <Center>
                        <ChipControlled checked={isRandomFname} setChecked={setFname}></ChipControlled>
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
