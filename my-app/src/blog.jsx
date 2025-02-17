import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import fo from "C:/Users/Administrator/Desktop/feb15/my-app/src/a11.png"
import fo1 from "C:/Users/Administrator/Desktop/feb15/my-app/src/a22.png"

const App = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Featured Article Section */}
        <div className="col-md-8">
          <div className="card bg-dark text-white border-0">
            <img
              src={fo}
              className="card-img"
              alt="Featured"
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
              <h2 className="card-title">5 Efficient Rules How to Organize Your Working Place</h2>
              <p className="card-text">Relationship tips couples therapists are giving all the time.</p>
            </div>
          </div>
        </div>

        {/* Sidebar Articles Section */}
        <div className="col-md-4">
          {[1, 2, 3, 4].map((item) => (
            <div className="d-flex mb-3" key={item}>
              <img
                src={fo1}
                className="rounded-circle me-3"
                alt="Thumbnail"
                height="90px"
              />
              <div>
                <h6 className="mb-0">Integer Malesuada Eget Venenatis</h6>
                <small>by John Doe</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;