import { Link } from "react-router-dom";
export default function Product(props) {
  return (
    <div className="col pt-5">
      <div className="card">
        <img
          src={props.image}
          className="card-img-top"
          alt="..."
          style={{ height: "300px", objectFit: "contain" }}
        />
        <div className="card-body">
          <h5
            className="card-title"
            style={{ height: "3rem", overflow: "hidden" }}
          >
            {props.title}
          </h5>
          <p
            className="card-text"
            style={{ height: "3rem", overflow: "hidden" }}
          >
            {props.description}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item fw-bold">
            category: {props.category}
          </li>
          <li className="list-group-item fw-bold">Price: {props.price}</li>
          <li className="list-group-item fw-bold">
            Rating: {props.rating?.rate}
          </li>
          <li className="list-group-item fw-bold">
            <Link to={`/product-details/${props.id}`} className="btn btn-success">Details</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
