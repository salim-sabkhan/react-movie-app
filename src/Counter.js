import { useEffect, useState } from "react";
// import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
// import MailIcon from '@mui/icons-material/Mail';


export function Counter() {
  // let like = 10;
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  // useEffect(() => {
  //     console.log("Salim Sabkhan 👍")
  //   },[like,dislike])

  return (
    <div>
      {/* onClick = In camel case */}
      <IconButton 
      onClick={() => {
        setLike(like + 1);} }
       aria-label="Like Button"
       color="primary">
    
      <Badge badgeContent={like} color="primary">
      👍
</Badge>
      </IconButton>

      <IconButton 
      onClick={() => {
        setDislike(dislike + 1);} }
       aria-label="Dislike Button"
       color="success">
       <Badge badgeContent={dislike} color="error" >
       👎 
       </Badge>
     
</IconButton>

      {/* <button className="like-style" onClick={() => {
        setLike(like + 1);
        console.log(like);
      }}>👍 {like}</button> */}
      {/* <button className="dislike-style" onClick={() => {
        setDislike(dislike + 1);
        console.log(dislike);
      }}>👎 {dislike}</button> */}
    </div>
  );
}
