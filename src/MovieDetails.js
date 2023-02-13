 import { useParams } from "react-router-dom";
// import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useNavigate} from "react-router-dom";
import { NotFoundPage } from "./NotFoundPage";
import { useEffect, useState } from "react";
import {API } from "./global";

export function MovieDetails() {
  const { id } = useParams();
  // const movie= movieList[movieid]
  // console.log(movieList, movie)
 
  const [movie, setMovie] = useState({})

  useEffect(()=>{
    fetch(`${API}/movies/${id}`,{
      method:"GET",
    })
    .then(data => data.json())
    .then((mv) =>  setMovie(mv));
   },  [])

   const navigate = useNavigate();

  if (!movie){
    return<NotFoundPage/>
  }

  

  return (
    <div>
    <iframe width="100%" height="530" src={movie.trailer} title="RRR Trailer (Telugu) - NTR, Ram Charan, Ajay Devgn, Alia Bhatt | SS Rajamouli | 25th March 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className="movie-detail-container">
      <div className="movie-spec">
        <h2 className="movie-name">  {movie.name}    </h2>
        <p  className="movie-rating" >⭐{movie.rating} </p>
      </div>
      <p className="movie-summary">{movie.summary}</p>
      <Button onClick={()=>navigate(-1)} 
      variant="contained" startIcon={< ArrowBackIosNewIcon/>}>
Back
</Button>
      </div>
      
    </div>
  );
}
