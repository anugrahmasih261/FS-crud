import React, { useState } from 'react';

const  SignupSearch = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([0]);

  const handleSearch = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:8000/s/search/?query=${query}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
      console.log(data.results)
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <label>
          Search:
          <input type="text" value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <button  type="submit">Search</button>
      </form>
      { data && data.results && data.results.length > 0 && data.results.map((data) => (
        <div key={data.id}>
          <p>Id: {data.id}</p>
          <p>Username: {data.username}</p>
          <p>Email: {data.email}</p>
          <p>Password: {data.password}</p>
          <img src={data.image} alt={data.username} />
        </div>
      ))}
    </div>
  );
}


export default SignupSearch
