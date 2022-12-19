import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function search(){
    navigate(`/search/${query}`);
  }

  return (
  <>
    <div className="container-fluid d-flex flex-row justify-content-between navbar">
      logo
      <div className="search">
        <input type="text" id="query" value={query} onChange={(e)=>{setQuery(e.target.value)}}/> 
        <p onClick={search}>search</p>  
      </div>
    </div>
  </>
  )
}

export default Navbar
