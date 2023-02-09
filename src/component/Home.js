import React, { useState }  from 'react'
import {Link} from 'react-router-dom'
//import { useState } from 'react';

function Home() {
const [search, setSearch]=useState(' ');
console.log(search);

  return (
    <div className='homeBg'>
        <div className='home'>
            <h1> search for your favourite movies and tv shows!.</h1>
            <input onChange={(event)=> setSearch(event.target.value)} value={search} type='text' placeholder='Search Movies and more....'/>
            <button>
                <Link to={`/search/${search}`}>Search</Link>
            </button>
        </div>
     </div>
  )
}

export default Home;
