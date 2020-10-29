import Link from 'next/link'
import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.div`
    border: 2px solid #666;
    border-radius: 10px;
    padding: 5px 30px 0 30px;
    margin-bottom: 10px;
    margin-right: 10px;
`
const Title = styled.a`
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    margin: 5px;
    cursor: pointer;
`

const Body = styled.div`
    font-size: 18px;
    background: #fff;
    border-radius: 5px 5px 0 0;
    padding: 10px 10px;
    border: 2px solid #666;
    border-bottom: none;
`

const Post = ({ title, body, id }) => {
    return (
        <Wrapper>
            <Link
                href={{
                    pathname: '/posts/[postId]',
                    query: { postId: id },
                }}
            >
                <Title>{title}</Title>
            </Link>
            <Body>{body}</Body>
        </Wrapper>
    )
}

export default Post
