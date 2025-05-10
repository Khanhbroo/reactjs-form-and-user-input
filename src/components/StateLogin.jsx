import { useState } from "react";

export default function Login() {
  const [enteredValue, setEnteredValue] = useState({
    email: "",
    password: "",
  });

  const emailIsInvalid =
    enteredValue.email !== "" && !enteredValue.email.includes("@");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(enteredValue);
    setEnteredValue({
      email: "",
      password: "",
    });
  };

  const handleInputChange = (identifier, event) => {
    setEnteredValue((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={(event) => handleInputChange("email", event)}
            value={enteredValue.email}
          />
          <div className="control-error">
            {emailIsInvalid && <p>Please enter a valid email address.</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={(event) => handleInputChange("password", event)}
            value={enteredValue.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
