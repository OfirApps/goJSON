import React from "react"
import { ThemeProvider } from "theme-ui"
import theme from "../components/theme"
import Nav from "../components/Nav"
import Sidebar from "../components/Sidebar"
import Footer from "../components/Footer"
import { Flex } from "rebass"
import Head from "next/head"

export default ({ Component, props }) => (
    <Flex height="100vh" flexDirection="column">
        <Head>
            <title>goJSON Dashboard</title>
        </Head>
        <ThemeProvider theme={theme}>
            <Nav />
            <Flex height="100%">
                <Sidebar />
                <Flex flexDirection="column" width="100%">
                    <Component {...props} />
                    <Footer />
                </Flex>
            </Flex>
        </ThemeProvider>
    </Flex>
)