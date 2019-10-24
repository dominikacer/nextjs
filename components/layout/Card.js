import React from 'react';

const Card = (props) => {
  const {movieList} = props;

  const singleMovie = movieList.map(movie => {
   return (
     <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
       <div className="card h-100">
         <a href="#"><img className="card-img-top" src={movie.image} alt={movie.name}/></a>
         <div className="card-body">
           <h4 className="card-title">
             <a href="#">{movie.name}</a>
           </h4>
           <h5>{movie.genre}</h5>
           <h5>{movie.releaseYear}</h5>
           <p className="card-text">
             {movie.description}
           </p>
         </div>
         <div className="card-footer">
           Rating: <small className="text-muted">{movie.rating}</small>
         </div>
       </div>
     </div>
   )
  });

  return (
    <div className="row">
      {singleMovie}
    </div>
  )
};

export default Card;