import { useParams } from "react-router-dom";
import { useGetOnePostQuery } from "../shared/api";
import { Link } from "react-router-dom";
import classes from "../app/style.module.scss";
export const Post: React.FC = () => {
  const { id } = useParams();

  const { data = [], isLoading } = useGetOnePostQuery(id);

  if (isLoading) return <h1>Загрузка данных...</h1>;

  return (
    <div className={classes.post}>
      <button>
        <Link to={`/`}>Назад</Link>
      </button>
      <div className={classes.post}>
        Post number: {data.id}. <br />
        Title: {data.title} <br />
        Body: {data.body} <br />
      </div>
    </div>
  );
};
