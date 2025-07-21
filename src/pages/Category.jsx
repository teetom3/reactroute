import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
const Category = () => {
  const { category } = useParams();

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="my-5 mx-4">
      <h1>{category}</h1>
      <div className="py-4">
        <Button onClick={handleRedirect}>Redirection</Button>
      </div>
    </div>
  );
};
export default Category;
