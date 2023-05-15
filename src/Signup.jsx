import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    setErrors([]);

    if (form.checkValidity()) {
      const params = new FormData(form);
      axios
        .post("http://localhost:3000/users.json", params)
        .then((response) => {
          console.log(response.data);
          form.reset();
          window.location.href = "/home"; // Change this to hide a modal, redirect to a specific page, etc.
        })
        .catch((error) => {
          console.log(error.response.data.errors);
          setErrors(error.response.data.errors);
        });
    }

    form.classList.add("was-validated");
  };

  return (
    <div id="signup" className="container">
      <h1>Signup</h1>
      <ul>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} noValidate>
        <div className="row">
          <div className="col-sm-6 mb-3">
            <label htmlFor="first_name" className="form-label">
              First Name:
            </label>
            <input
              name="first_name"
              type="text"
              className="form-control"
              required
            />
            <div className="invalid-feedback">Please provide a first name.</div>
          </div>
          <div className="col-sm-6 mb-3">
            <label htmlFor="last_name" className="form-label">
              Last Name:
            </label>
            <input
              name="last_name"
              type="text"
              className="form-control"
              required
            />
            <div className="invalid-feedback">Please provide a last name.</div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input name="email" type="email" className="form-control" required />
          <div className="invalid-feedback">Please provide a valid email.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            required
            minLength="6"
          />
          <div className="invalid-feedback">
            Please provide a password with at least 6 characters.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password_confirmation" className="form-label">
            Password confirmation:
          </label>
          <input
            name="password_confirmation"
            type="password"
            className="form-control"
            required
            minLength="6"
          />
          <div className="invalid-feedback">
            Please provide the same password as above.
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Signup
        </button>
      </form>
    </div>
  );
}
