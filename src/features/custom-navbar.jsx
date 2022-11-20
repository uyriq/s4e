import { Navbar, Group, Button } from '@mantine/core'

function CustomNavbar() {
    return (
        <Group direction="column" spacing="lg" grow sx={{ margin: 'auto 0 auto 0' }}>
            <Navbar.Section>
                <Button variant="subtle" fullWidth>
                    Assets/Hosts
                </Button>
            </Navbar.Section>

            <Navbar.Section>
                <Button variant="subtle" fullWidth>
                    Software
                </Button>
            </Navbar.Section>

            <Navbar.Section>
                <Button variant="subtle" fullWidth>
                    Configurations
                </Button>
            </Navbar.Section>
        </Group>
    )
}

export default CustomNavbar
