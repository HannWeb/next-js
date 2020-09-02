import React from 'react'
import Navbar from './Navbar'


//MUI
import Container from '@material-ui/core/Container';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';



const Layout = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <main>
                <Navbar />
                <Container maxWidth="lg">
                    {props.children}
                </Container>

            </main>
        </ThemeProvider>
    )
}

export default Layout
