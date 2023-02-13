import { useState, useEffect } from "react";
import { Movie } from "./Movie";
import { API } from "./global";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export function MovieList() {
  // const movieList = INTIAL_MOVIE_LIST;
  const [movieList, setMovieList] = useState([]);

  // useEffect(()=>{
  //   fetch("https://62c56532134fa108c250b563.mockapi.io/movies")
  //   .then(data => data.json())
  //   .then((mvs) =>  setMovieList(mvs));
  //  },[])

  const getMovies = () => {

      fetch(`${API}/movies`,{
        method:"GET",
      })
      .then(data => data.json())
      .then((mvs) =>  setMovieList(mvs));

  }

  useEffect(()=>getMovies(),[])

  const navigate = useNavigate();

  return (
    <div>
      <div className="movie-list">
        {movieList.map((mv, index) => (
          <Movie
            key={mv.id}
            movie={mv}
            id={mv.id}
            deleteButton={
              <IconButton
                onClick={() => {
                  fetch(`${API}/movies/${mv.id}`, { method: "DELETE" })
            .then(() =>  getMovies());
                }}color="error"
              >
                <DeleteIcon />
              </IconButton>
            }
            editButton={
              <IconButton
                onClick={() => navigate(`/movies/edit/${mv.id}`)}
            //        fetch(`${API}/movies/${mv.id}`, {
            //     method: "PUT" })
            //  .then(() =>  getMovies());
                 color="secondary"
              >
                <EditIcon />
              </IconButton>
            }
          />
        ))}
      </div>
    </div>
  );
}

//  <IconButton
// onClick={()=>{
// fetch(`${API}/movies/${mv.id}`,{method:"DELETE",})
// .then(()=> console.log())
// }} >
// <DeleteIcon/>
// </IconButton>
