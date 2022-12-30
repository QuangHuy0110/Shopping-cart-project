import React from "react";
const Blog = (props) => {
  const { title, description, author, image } = props.content;
  return (
    <>
      <div
        data-testid="blog-item"
        className="card border-0 col-md-6 col-lg-4 bg-transparent my-3"
      >
        <img src={image} alt="" />
        <div className="card-body px-0">
          <h4 className="card-title">{title}</h4>
          <p className="card-text mt-3 text-muted">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              <span className="fw-bold">Author: </span>
              {author}
            </small>
          </p>
          <a href="#!" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};

export default Blog;
