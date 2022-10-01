import React, { ReactNode } from "react"
import { Container } from "react-bootstrap"
import GlobalStyle from "./styles/globalStyle"
import Header from './header'
import Footer from './footer'
import Main from "./main"

interface Props {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            <Container className="px-1 p-md-4">
                <Main>
                    {children}
                </Main>
            </Container>
            <Footer />
        </div>
    )
}

export default Layout
