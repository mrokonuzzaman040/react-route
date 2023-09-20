import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const post = useLoaderData();
    return (
        <div className=''>
            <h2>Posts: {post.length}</h2>
            <div className="">
                {
                    post.map(post => <Post post={post} key={post.id}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;