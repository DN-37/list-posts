import { useState, useEffect } from "react";
import { PostItem } from "../entities/PostItem";
import { IPost } from "../shared/types";
import { useGetPostsQuery } from "../shared/api";
import classes from "../app/style.module.scss";

export const ListPosts: React.FC = () => {
  const [currentPostStart, setCurrentPostStart] = useState(0);
  const { data: posts, isLoading } = useGetPostsQuery({
    limit: 25,
    start: currentPostStart,
  });
  const [isMyFetching, setIsFetchingDown] = useState(false);
  const [isMyFetchingUp, setIsMyFetchingUp] = useState(false);
  useEffect(() => {
    if (isMyFetching) {
      setCurrentPostStart((prev) => {
        return prev < 75 ? prev + 1 : prev;
      });
      setIsFetchingDown(false);
    }
  }, [isMyFetching]);
  useEffect(() => {
    if (isMyFetchingUp) {
      setCurrentPostStart((prev) => {
        return prev > 0 ? prev - 1 : prev;
      });
      setIsMyFetchingUp(false);
    }
  }, [isMyFetchingUp]);
  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  const scrollHandler = (e: any): void => {
    if (e.target.documentElement.scrollTop < 50) {
      setIsMyFetchingUp(true);
    }
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      50
    ) {
      setIsFetchingDown(true);
      window.scrollTo(
        0,
        e.target.documentElement.scrollHeight +
          e.target.documentElement.scrollTop
      );
    }
  };

  if (isLoading) return <h1>Загрузка данных...</h1>;

  return (
    <div className={classes.post}>
      <h1>Список постов</h1>
      <ul>
        {posts?.map((post: IPost) => (
          <li key={post.id}>
            <PostItem post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};
