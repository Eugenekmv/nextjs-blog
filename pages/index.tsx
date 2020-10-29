import { useEffect } from 'react'
import { NextPage } from 'next'
import { GetStaticProps } from 'next'

import axios from '../api/index'

import Post from './components/post'

export interface Post {
    title: string
    body: string
    id: number
}

export interface Props {
    posts: Post[]
}

const Index: NextPage<Props> = ({ posts }) => {
    useEffect(() => {
        console.log(posts)
    }, [posts])

    return (
        <>
            {posts.map((post) => (
                <Post title={post.title} body={post.body} id={post.id} />
            ))}
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const res = await axios.get('/posts')
    const posts = res.data

    return {
        props: { posts },
    }
}

export default Index
