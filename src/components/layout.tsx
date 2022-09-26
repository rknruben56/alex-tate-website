import React, { ReactNode } from "react"
import { Container } from "react-bootstrap"
import GlobalStyle from "./globalStyle"
import Header from './header'
import Footer from './footer'

interface Props {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Container className="px-1 p-md-4">
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout
