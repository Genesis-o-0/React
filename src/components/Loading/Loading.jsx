import React from "react";

const Loading = ({ children, loading, error }) => {
  if (loading) {
    return (
      <div className="d-flex h-100 w-100 align-items-center justify-content-center pt-5">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }
  if (error) {
    return <div className="text-danger fs-1 mx-auto"> {error}</div>;
  }
  return <div className="row row-cols-4 py-5 row-gap-5">{children}</div>;
};

export default Loading;
