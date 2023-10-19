export default function Home() {
  return (
    <>
      <div className="container mt-5">
        <div className="jumbotron">
          <h1>Welcome to our Product Showcase</h1>
          <p>Discover the best products on the market.</p>
          <a className="btn btn-primary" href="#">
            Browse Products
          </a>
        </div>
      </div>
      <div className="container">
        <h2 className="my-4">Featured Products</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Product 1</h5>
                <p className="card-text">Description of Product 1.</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Product 2</h5>
                <p className="card-text">Description of Product 2.</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Product 3</h5>
                <p className="card-text">Description of Product 3.</p>
                <a href="#" className="btn btn-primary">
                  View Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
