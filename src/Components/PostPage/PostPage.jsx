import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router";

export default () => {
    const postId = useParams().postId;
    const post = useSelector(state => state.posts).find(post => post.id == postId);
    return (
        <>
            <Link to="/">Back</Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </>
    );
}