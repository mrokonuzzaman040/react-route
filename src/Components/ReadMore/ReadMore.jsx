import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ReadMore = ({post}) => {
    const Post = useLoaderData();
    const {title, body} = Post;
    return (
        <div>
            <h2 className='text-2xl text-white'>{title}</h2>
            <p className='text-white'>{body}</p>
        </div>
    );
};

export default ReadMore; 