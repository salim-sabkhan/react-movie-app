import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {API} from "./global"

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  return (
    <div>
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
            const newMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
            };
            // copy the movielist and new movie in it
            // setMovieList([...movieList, newMovie]);

            fetch(`${API}/movies`, {
              method: "POST",
              body:JSON.stringify(newMovie),
              headers:
              {
                "Content-Type": "application/json"
              }
            })
              .then((data) => data.json())
              .then(()=> navigate("/movies"))
              

            
          }}
          variant="contained"
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
}
