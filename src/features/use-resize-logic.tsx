import { MantineNumberSize } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

function useResizeLogic() {
    // логика размеров
    let reSizePx: string
    let reSize: MantineNumberSize = 'xs'
    const extrasmallScreen = useMediaQuery('(min-width: 400px)')
    const smallScreen = useMediaQuery('(min-width: 600px)')
    const mediumScreen = useMediaQuery('(min-width: 900px)')
    const largeScreen = useMediaQuery('(min-width: 1200px)')
    const extralargeScreen = useMediaQuery('(min-width: 1440px)')

    switch (true) {
        case extralargeScreen:
            reSizePx = '128px'
            reSize = 'xl'
            break
        case largeScreen && !extralargeScreen:
            reSizePx = '96px'
            reSize = 'lg'
            break
        case mediumScreen && !largeScreen && !extralargeScreen:
            reSizePx = '64px'
            reSize = 'md'
            break
        case smallScreen && !mediumScreen && !largeScreen && !extralargeScreen:
            reSizePx = '32px'
            reSize = 'sm'
            break
        case extrasmallScreen && !smallScreen && !mediumScreen && !largeScreen && !extralargeScreen:
            reSizePx = '16px'
            reSize = 'xs'
            break
        default:
            reSizePx = '16px'
            reSize = 'xs'
            break
    }
    return { reSizePx, reSize }
}

export default useResizeLogic
