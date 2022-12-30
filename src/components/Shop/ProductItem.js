import { Link } from "react-router-dom";
import { createShortcut } from "../../service/index";
const ProductItem = ({ item }) => {
  const { title, price, id, thumbnail } = item;

  return (
    <>
      <Link
        data-testid="product-item"
        to={`/products/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div data-testid={id} className="card shadow  bg-body rounded">
          <img
            src={thumbnail}
            className="card-img-top shadow-sm img-fluid"
            style={{ height: "220px", objectFit: "cover" }}
            alt=""
          />
          <div className="card-body">
            <p className="text-center fw-bolder">{createShortcut(title, 25)}</p>
            <p className="text-center fw-bold">$ {price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
