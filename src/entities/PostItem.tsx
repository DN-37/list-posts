import { Link } from "react-router-dom";
import { IPost } from "../shared/types";
import classes from "../app/style.module.scss";

interface IPostItemProps {
  post: IPost;
}

function lengthBody(post: IPost) {
  return post.body.length > 30 ? post.body.substring(0, 30) + "..." : post.body;
}

export const PostItem: React.FC<IPostItemProps> = ({ post }) => {
  return (
    <div className={classes.sizeDiv}>
      № {post.id}. Title: {post.title}. Body:
      {lengthBody(post)}
      <button>
        <Link to={`/posts/${post.id}`}>Просмотр</Link>
      </button>
    </div>
  );
};
