import { AppProps } from 'next/app'
import Link from 'next/link'
import Head from 'next/head'
import { wrapper } from '../store/store'
import NextNprogress from 'nextjs-progressbar'

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    body {
        background: #f0eff1;
        margin: 0;
        padding: 0;
        min-height: 100vh;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        

        font-family: 'Poppins', sans-serif;

        &::-webkit-scrollbar {
            display: none;
    }

    h1 {
    font-size: 7rem;
    }
`
const Wrapper = styled.div`
    max-width: 1200px;
    margin: 30px auto;
`
const NavBarContainer = styled.div`
    background: #333;
`
const Navbar = styled.div`
    display: flex;
    height: 60px;
    align-content: center;

    max-width: 1000px;
    margin: 0 auto;
`
const NavLink = styled.a`
    display: inline-block;
    color: #fff;
    padding-top: 18px;
    margin-right: 15px;
    opacity: 0.8;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;

    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`

const MyApp = ({ Component, pageProps }: Readonly<AppProps>): JSX.Element => {
    return (
        <>
            <NextNprogress color="#29D" startPosition="0.3" stopDelayMs="200" height="3" />
            <GlobalStyle />
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Poppins:wght@400;600&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <NavBarContainer>
                <Navbar>
                    <Link href="/">
                        <NavLink>Blogs</NavLink>
                    </Link>
                    <Link href="/posts/new">
                        <NavLink>Create a post</NavLink>
                    </Link>
                </Navbar>
            </NavBarContainer>
            <Wrapper>
                <Component {...pageProps} />
            </Wrapper>
        </>
    )
}
export default wrapper.withRedux(MyApp)
