import App from 'next/app'
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Head from 'next/head'

const theme = responsiveFontSizes(createMuiTheme({
    palette: {
    },
    typography: {
    }
}))

class MyApp extends App {
    render() {
        const { Component } = this.props;
        return <ThemeProvider theme={theme}>
            <Head>
                  <title>le3 next starter</title>
            </Head>
            <CssBaseline />
            <Component />
        </ThemeProvider>
    }
}

export default MyApp;