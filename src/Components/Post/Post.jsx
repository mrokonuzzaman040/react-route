import { Link } from "react-router-dom";

const Post = ({post}) => {
    const {title, body, id} = post;
    return (
        <div className='text-white mb-10 border-purple-500 rounded-xl'>
            <h2 className='text-2xl font-bold text-center'>{title}</h2>
            <p>Author Id: {id}</p>
            <Link to={`/post/${id}`}>Read More....</Link>
            <hr className='mt-10' />
        </div>
    );
};

export default Post;