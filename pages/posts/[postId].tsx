import { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import axios from '../../api/index'
import styled from 'styled-components'

const Title = styled.a`
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    font-weight: 600;
    margin: 5px;
`
const Body = styled.div`
    font-size: 18px;
    padding: 10px 10px;
`

interface Post {
    title: string
    body: string
    id: number
}
interface Props {
    posts: Post[]
}

const Post: NextPage<Props> = ({ posts }) => {
    const router = useRouter()
    const [post, setPost] = useState<Post>()

    useEffect(() => {
        const res = posts.find((post) => post.id.toString() === router.query.postId)
        setPost(res)
    }, [posts])

    return (
        <div>
            {post && (
                <>
                    <Title>{post.title}</Title>
                    <Body>{post.body}</Body>
                </>
            )}
        </div>
    )
}
export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get('/posts')
    const posts = res.data
    const paths = posts.map((post) => ({
        params: { postId: post.id.toString() },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get('/posts')
    const posts = res.data
    return {
        props: { posts },
    }
}

export default Post
