// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ImageGrid from './Components/ImageGrid';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  console.log(process.env.REACT_APP_SECRET_KEY)
  
  const getData = async () => {
    const res = await axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=15&query=car`, {
      headers: {
        Authorization: "Client-ID hG4eQM0Y5AC4oRsGpZ2F0MmBjJs7IksXVDw29vLAyeA"
      }
    });
    setData(res.data.results);
  }

  const getSearchData = async(query) => {
    const res = await axios.get(`https://api.unsplash.com/search/photos/?page=1&per_page=15&query=${query}`, {
      headers: {
        Authorization: "Client-ID hG4eQM0Y5AC4oRsGpZ2F0MmBjJs7IksXVDw29vLAyeA"
      }
    });
    setData(res.data.results);
  }

  return (
    <div className="App">
      <Navbar  getSearchData={getSearchData}/>
      <ImageGrid data={data}/>
    </div>
  );
}

export default App;
