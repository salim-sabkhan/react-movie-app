import { Counter } from "./Counter";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "./global";

export function Movie({ movie, id, deleteButton, editButton }) {
  // const movie = {
  //     name: "RRR",
  //     poster:
  //       "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
  //     rating: 8.8,
  //     summary:
  //       "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments."
  // }
  const styles = {
    color: movie.rating >= 8 ? "blue" : "red",
  };

  const [show, setShow] = useState(true);

  const summaryStyles = {
    // visibility : "hidden",
    // visibility : "visible",
    display: show ? "block" : "none", // block means Show
  };

  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <img className="movie-poster" src={movie.poster} />
      <div className="movie-spec">
        <h2 className="movie-name">
          {movie.name} - {id}
          <IconButton
            onClick={() => setShow(!show)}
            aria-label="Toggle Description"
            color="primary"
          >
            {/* <KeyboardArrowUpIcon/>
            <KeyboardArrowDownIcon/> */}
            {show ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          <IconButton onClick={() => navigate(`/movies/${id}`)} color="primary">
            <InfoIcon />
          </IconButton>
        </h2>
        <p className="movie-rating" style={styles}>
          ⭐{movie.rating}
        </p>
      </div>
      {/* <button onClick={() => navigate("/movies/" + id)}>Info</button> */}

      {/* <button onClick={() => setShow(!show)}>Toggle Description</button> */}
      {/* <p style={summaryStyles} className="movie-summary">{movie.summary}</p> */}
      {show ? <p className="movie-summary">{movie.summary}</p> : ""}
      <Counter />
      {deleteButton}
      { editButton}
      {/* <IconButton
        onClick={() => {
            fetch(`${API}/movies/${id}`, { method: "DELETE" })
            .then(() =>  getMovies());
              // .then((data) => data.json())
              // .then((mv) => setMovie(mv));
        }}>
        <DeleteIcon />
      </IconButton> */}
    </div>
  );
}
