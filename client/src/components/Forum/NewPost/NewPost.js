import React, {useState} from 'react';

const defaultPost = {
    title:'',
    content: ''
}

const NewPost = props => {
    const [getPost, setPost] = useState(defaultPost)
    const onChangeHandler = (input, type) => {
        console.log(type + " : " + input);
        setPost({...getPost, [type]: input})
    }
    const onSubmitHandler = () => {
        console.log(getPost);
        props.createPost(getPost);
    }
    return(
        <div>
            <p>Create new post:</p>
            <div>
                <label>Title:</label>
                <input type='text' onChange={e => onChangeHandler(e.target.value, 'title')}></input>
                <br />
                <label>Content:</label>
                <input type='text' onChange={e => onChangeHandler(e.target.value, 'content')}></input>
                <br />
                <button onClick={() => onSubmitHandler()}>Submit</button>
            </div>
        </div>
    )
}

export default NewPost;