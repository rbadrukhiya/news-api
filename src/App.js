import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Routes, Route } from "react-router-dom"


import 'bootstrap/dist/css/bootstrap.min.css';
// import News from './news';
import Data from './data';
import { useEffect, useState } from 'react';
import News from './news';

function App() {
  // const [data, setdata] = useState([])

  // useEffect(() => {
  //   axios.get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=a51218f173f74b7581df3c62860b9981')
  //     .then(function (response) {
  //       console.log(response);
  //       setdata(response.data.articles)
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })

  // }, [])

  return (
    <div className="App">
{/* <News/> */}
      {/* {
        data.map((i) => {
          return(
            <>
          <p>{i.title}</p>
            
            </>
          )
        })
      } */}

      <Routes>
        {/* <Route path="/" element={<News />} /> */}
        <Route path="/" element={<News/>}/>
        <Route path="/data/:category" element={<Data />} />
      </Routes>




    </div>
  );
}

export default App;
