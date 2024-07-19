import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ApiFetch() {
  const [data, setData] = useState([]);

  const getData = async () => {
  
      const response = await axios.get('http://127.0.0.1:4000/albums');
      setData(response.data);
   
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-4">Albums</h1>
      {data.length === 0 ? (
        <h1 className="text-center mt-8">No data available</h1>
      ) : (
        <table className="text-center bg-white border border-gray-200">
          <thead>
            <tr className="bg-blue-200">
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">User ID</th>
            </tr>
          </thead>
          <tbody>
            {data.map((album) => (
              <tr key={album.id}>
                <td className="border border-gray-300 px-4 py-2">{album.id}</td>
                <td className="border border-gray-300 px-4 py-2">{album.title}</td>
                <td className="border border-gray-300 px-4 py-2">{album.userId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ApiFetch;
