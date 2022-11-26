import { Global } from '@mantine/core'
import light from '../shared/fonts/tajawal-light.ttf'
import normal from '../shared/fonts/tajawal-regular.ttf'

export function CustomFonts() {
    return (
        <Global
            styles={[
                {
                    '@font-face': {
                        fontFamily: 'Tajawal, sans-serif',
                        src: `url('${light}') format("ttf")`,
                        fontWeight: 200,
                        fontStyle: 'normal',
                    },
                },
                {
                    '@font-face': {
                        fontFamily: 'Tajawal, sans-serif',
                        src: `url('${normal}') format("ttf")`,
                        fontWeight: 300,
                        fontStyle: 'normal',
                    },
                },
            ]}
        />
    )
}
