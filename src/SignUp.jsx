import axios from "axios";
import { useState } from "react";


export function Signup() {
  const [errors, setErrors] = useState([])

  const handleUserSignup = (event) => {
    console.log("Signing up new user");
    event.preventDefault();
    setErrors([]);
    const formData = new FormData(event.target)
    const params = {};
    formData.forEach((value, key) => {
      params[key] = value;
    })
    console.log(params)
    axios.post("http://localhost:3000/users.json", formData)
    .then((response) => {
      console.log(response.data);
      event.target.reset();
      window.location.href = '/';
    })
    .catch((error) => {
      console.log(error.response.data.errors);
      setErrors(error.response.data.errors);
    })
  }

  return(
    <div id="signup">
      <h1>Sign Up Here</h1>
      <ul>
        {errors.map((error) => 
          <li key={error}>{error}</li>
        )}
      </ul>

      <form onSubmit={handleUserSignup}>
        <div>
          First name:<input name="first_name" type="text"/>
        </div>
        <div>
          Last name:<input name="last_name" type="text"/>
        </div>
        <div>
          Email:<input name="email" type="text"/>
        </div>
        <div>
          Username:<input name="username" type="text"/>
        </div>
        <div>
          Password:<input name="password" type="password"/>
        </div>
        <div>
          Password Confirmation:<input name="password_confirmation" type="password"/>
        </div>
        <button>Signup</button>
      </form>
    </div>
  )
}