import { useParams } from "react-router";
const Category = () => {
  const { category } = useParams();
  return (
    <div className="my-5">
      <h1>{category}</h1>
    </div>
  );
};
export default Category;
