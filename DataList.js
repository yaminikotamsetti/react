import React, { useState, useEffect } from 'react';

function DataList() {
  // State to store fetched data
  const [data, setData] = useState([]);
  // State to track loading status
  const [loading, setLoading] = useState(true);
  // State to track errors if they occur
  const [error, setError] = useState(null);

  // useEffect to fetch data from API when component mounts
  useEffect(() => {
    // Fetch data from an API (replace with your own API URL if needed)
    fetch('http://localhost:5000/api/books')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Store the data in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(error); // Set error if there's a problem with the request
        setLoading(false);
      });
  }, []);

  // If data is still loading, show loading message
  if (loading) return <p>Loading...</p>;

  // If there is an error, display the error message
  if (error) return <p>Error: {error.message}</p>;

  // Return a list of fetched items
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default DataList;
