import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import p1 from "C:/Users/Administrator/Desktop/feb15/my-app/src/a2.jpg"

const App = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Main Content Section */}
        <div className="col-md-8">
          <h2 className="fw-bold text-primary">Eu ridiculus fringilla aenean</h2>
          <p>
            Eget aenean tellus venenatis. Donec odio tempus. Feugiat pretium
            netus nullam quam enim sociis quis sem sociis vel bibendum.
          </p>
          <blockquote className="blockquote p-3 border-start border- border-dark">
            <p>
              Quis adipiscing ligula donec ullamcorper tellus. Id odio
              vulputate aliquam nullam vitae tincidunt semper etiam quam donec
              quis.
            </p>
            <footer className="blockquote-footer">Donec Maleso Integer</footer>
          </blockquote>
        </div>

        {/* Author Sidebar */}
        <div className="col-md-4 text-center">
          <div className="card p-3">
            <h5 className="text-muted">AUTHOR</h5>
            <h6 className="fw-bold">Luci Avetisyan</h6>
            <img
              src={p1}
              className="rounded-circle mx-auto d-block my-2"
              alt="Author"
              height="90px"
            />
            <p className="small text-muted">
              Luci vitae rhoncus hendrerit. Eget arcu diam vehicula massa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
