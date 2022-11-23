import { MantineNumberSize } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

function useResizeLogic() {
    // логика размеров
    let reSizePx: string
    let reSize: MantineNumberSize = 'xs'
    let reSizeNum: number

    const extrasmallScreen = useMediaQuery('(min-width: 400px)')
    const smallScreen = useMediaQuery('(min-width: 600px)')
    const mediumScreen = useMediaQuery('(min-width: 900px)')
    const largeScreen = useMediaQuery('(min-width: 1200px)')
    const extralargeScreen = useMediaQuery('(min-width: 1440px)')

    switch (true) {
        case extralargeScreen:
            reSizePx = '128px'
            reSize = 'xl'
            reSizeNum = 128
            break
        case largeScreen && !extralargeScreen:
            reSizePx = '96px'
            reSize = 'lg'
            reSizeNum = 96
            break
        case mediumScreen && !largeScreen && !extralargeScreen:
            reSizePx = '64px'
            reSize = 'md'
            reSizeNum = 64
            break
        case smallScreen && !mediumScreen && !largeScreen && !extralargeScreen:
            reSizePx = '32px'
            reSize = 'sm'
            reSizeNum = 32
            break
        case extrasmallScreen && !smallScreen && !mediumScreen && !largeScreen && !extralargeScreen:
            reSizePx = '16px'
            reSize = 'xs'
            reSizeNum = 16
            break
        default:
            reSizePx = '16px'
            reSize = 'xs'
            reSizeNum = 16
            break
    }
    return { reSizePx, reSize, reSizeNum }
}

export default useResizeLogic
