import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Main Content Section */}
        <div className="col-md-8">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. ipsum dolor sit amet consectetur adipisicing elit. Eos quas, maiores asperiores, autem placeat repudiandae omnis ex iusto quia eum fugiat assumenda nemo impedit, maxime minus dolores explicabo officiis ut!Ut eu sem aenean imperdiet. Hendrerit penatibus sem adipiscing aliquet consequat nec orci nascetur.
            Etiam massa quam dolor aenean maecenas sociis tellus consectetur.
          </p>
          <ul>
            <li>Mollis lorem vitae varius.</li>
            <li>Felis lacinia justo aenean curabitur donec consequat sit nascetur tellus dapibus.</li>
            <li>Maecenas imperdiet vitae vel vel parturient eleifend mollis eu libero.</li>
            <li>Dictum libero facilisi feugiat fringilla sed etiam vel sem nullam elit vitae eu.</li>
            <li>Felis nec eget curabitur sapien nisi aliquam pretium donec dapibus faucibus.</li>
          </ul>
        </div>

        {/* Sidebar */}
        <div className="col-md-4">
          <div className="card p-3 text-center">
            <h5 className="text-muted">Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <i className="bi bi-facebook"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-youtube"></i>
            </div>
            <p className="mt-3">Subscription Subscribe to our newsletter and receive a selection of cool articles every week.</p>
            <input type="email" className="form-control mb-2" placeholder="Enter your email" />
            <button className="btn btn-dark w-100">SUBSCRIBE</button>
            <small className="text-muted mt-2 d-block">
              By checking this box, you confirm that you have read and are agreeing to our terms.
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;