import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {API} from "./global"



export function EditMovie() {

  const { id } = useParams();
  // const movie= movieList[movieid]
  // console.log(movieList, movie)
 
  const [movie, setMovie] = useState(null)

  useEffect(()=>{
    fetch(`${API}/movies/${id}`,{
      method:"GET",
    })
    .then(data => data.json())
    .then((mv) =>  setMovie(mv));
   },  [])


  return movie ?  <EditMovieForm movie={movie}/> : "Loading...";

}

function EditMovieForm({movie}){

  const [name, setName] = useState(movie.name);
  const [rating, setRating] = useState(movie.rating);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [trailer, setTrailer] = useState(movie.trailer);

  const navigate = useNavigate();

  return(
    <div className="add-movie-form">
        {/* <input
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter Movie Name"/> */}

        <TextField
          onChange={(event) => setName(event.target.value)}
          id="standard-basic"
          label="Name"
          variant="standard"
        />

        <TextField
          onChange={(event) => setRating(event.target.value)}
          id="standard-basic"
          label="Rating"
          variant="standard"
        />

        <TextField
          onChange={(event) => setPoster(event.target.value)}
          id="standard-basic"
          label="Poster"
          variant="standard"
        />

        <TextField
          onChange={(event) => setSummary(event.target.value)}
          label="Summary"
          variant="standard"
        />

        <TextField
          onChange={(event) => setTrailer(event.target.value)}
          label="Trailer"
          variant="standard"
        />

        <Button
          onClick={() => {
            const updatedMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
            };
            // copy the movielist and new movie in it
            // setMovieList([...movieList, newMovie]);

            fetch(`${API}/movies/${movie.id}`, {
              method: "PUT",
              body:JSON.stringify(updatedMovie),
              headers:{
              "Content-Type": "application/json"
              }
            })
              .then((data) => data.json())
              .then(()=> navigate("/movies"))
              

            
          }}
          variant="contained"
        >
          Save Movie
        </Button>
      </div>
  )
}
