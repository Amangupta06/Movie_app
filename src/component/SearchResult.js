import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link , useParams } from "react-router-dom";

function SearchResult() {
  const {movie} = useParams();//extractor
  const url =`https://imdb-api.com/en/API/Search/k_nt4ls040/${movie}`

  //console.log(url);
  const [data, setData] = useState();
  useEffect(() => {
    async function fun1() {
      const response =await axios.get(url);
      //fetch
      console.log(response.data.results);
      setData(response.data.results);
      //console.log(response);
    }
  fun1();
    //return () => {
    }, [url]);
    //you cannot map undefined
  
console.log(data);

//conditional mapping (that question mark)
// ? acts as a gate=> if there is a value in the array then only open the gate or proceed or else dont proceed .
  return (
    <div className="movieCards">
      {
        data?.map((card)=>(
          <div key = {card.id} className="movieCard">
        <Link className="movieCardLink" to={`/movie/${card.id}`}>
          <img src={card.image} alt="movie img" className="movieCardImg" />
          <h1 className="movieCardTitle">{card.title}</h1>
        </Link>
      </div>
        ))
      }



      <div className="movieCard">
        <Link className="movieCardLink" to="/">
          <img src="null" alt="movie img" className="movieCardImg" />
          <h1 className="movieCardTitle">Avengers</h1>
        </Link>
      </div>
    </div>
  );
}

export default SearchResult;
