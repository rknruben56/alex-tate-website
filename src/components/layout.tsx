import React, { ReactNode } from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap"
import GlobalStyle from "./styles/globalStyle"
import Header from './header'
import Footer from './footer'

interface Props {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <GlobalStyle />
            <Header />
            <Container className="px-1 p-md-4" style={{ flex: 1 }}>
                {children}
            </Container>
            <Footer />
        </div>
    )
}

export default Layout
