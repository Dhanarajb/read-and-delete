import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [data, setData] = useState([
    { id: 1, username: 'Dhanu' },
    { id: 2, username: 'pandu' },
    { id: 3, username: 'tingu' },
    { id: 4, username: 'piu' },
    { id: 5, username: 'yogi' },
    { id: 6, username: 'snehi' },
  ]);
  // useEffect(()=>{
  //   setData(data)
  // },[])
  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  return (
    <div>
      {data.map((item) => (
        <div>
          <li>
            {item.id}={item.username}
          </li>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
