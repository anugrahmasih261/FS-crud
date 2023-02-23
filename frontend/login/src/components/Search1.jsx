import React, { useState } from 'react';

const SignupDetails = () => {
  const [username, setUsername] = useState('');
  const [signup, setSignup] = useState('');
  const [error, setError] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:8000/s/search/?username=${username}`)
      .then((response) => {
        console.log(response)
        if (!response.ok) {
          throw new Error('Failed to fetch signup');
        }
        return response.data;
      })
      .then((response) => setSignup(response))
      .catch((error) => setError(error));
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          Username:
          <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>
      {error && <p>{error.message}</p>}
      {signup && (
        <div>
          <p>Username: {signup.username}</p>
          <p>Email: {signup.email}</p>
          <p>Password: {signup.password}</p>
          {signup.image && <img src={signup.image} alt={signup.username} />}
        </div>
      )}
    </div>
  );
};

export default SignupDetails