import React, { ReactNode } from "react"
import GlobalStyle from "./globalStyle"
import Header from './header'

interface Props {
    children?: ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <GlobalStyle />
            <Header />
            {children}
        </div>
    )
}

export default Layout
