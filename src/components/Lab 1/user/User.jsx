// User Component
function User(props) {
  return (
    <div className="bg-dark text-light p-4 mb-3">
      <p>Id: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Website: {props.website}</p>
      <p>
        <button
          className="btn btn-danger"
          onClick={() => props.deleteUserHandeler(props.id)}
        >
          Delete User
        </button>
      </p>
    </div>
  );
}

export default User;
