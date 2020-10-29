import React, { useState, SyntheticEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import styled from 'styled-components'
import { addPost } from '../../store/actions/addPost'
import { RootState } from '../../store/store'

const Wrapper = styled.div`
    // background: #666;
    width: 600px;
    border: 2px solid #333;
    border-radius: 10px;
    padding: 5px 30px 0 30px;
    margin-bottom: 10px;
    margin-right: 10px;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    border: 2px solid #333;
    border-radius: 10px;
    height: 60px;
    min-width: 230px;
    outline: none;
    font-size: 24px;
`
const TitleInput = styled(Input)`
    width: 80px;
`

const Label = styled.label`
    // background: #fff;
    color: #333;
    font-size: 24px;
`
const Button = styled.button`
    margin: 15px 0;
    width: 120px;
     padding: 0.35em 1.2em;
     border: 2px solid #333;
     border-radius: 0.12em;
     box-sizing: border-box;
     background: transparent;
     font-family: 'Roboto', sans-serif;
     font-weight: 300;
     color: #333;
     text-align: center;
     transition: all 0.2s;
    cursor: pointer;
`

const NewPost: React.FC = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state: RootState) => state.posts)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const submitHandler = (e: SyntheticEvent) => {
        e.preventDefault()
        dispatch(addPost(title, body))
        setTitle('')
        setBody('')
        console.log(posts)
    }
    return (
        <Wrapper>
            <Form action="POST" onSubmit={submitHandler}>
                <Label htmlFor="title">Title</Label>
                <TitleInput
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Label htmlFor="body">Body</Label>
                <Input type="text" name="body" id="body" value={body} onChange={(e) => setBody(e.target.value)} />
                <Button type="submit">{posts.loading ? 'Submitting' : 'Submit'}</Button>
                {posts.error ? <p>Error: {posts.error} </p> : null}
            </Form>
        </Wrapper>
    )
}

export default NewPost
