import React from "react";
const MovieCard = ({post}) => {
  return(
    <div className="movie">
      <div>
        <p>{post.Year}</p>
      </div>

      <div>
        <img
          src={
            post.Poster !== "N/A"
              ? post.Poster
              : "https://via.placeholder.com/400"
          }
          alt={post.Title}
        />
      </div>

      <div>
        <span>{post.Type}</span>
        <h3>{post.Title}</h3>
      </div>
    </div>
  );
};
export default MovieCard;