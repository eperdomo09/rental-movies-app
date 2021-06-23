const Like = ({ movie, onLike }) => {
  const classes = movie.liked ? "fa fa-heart" : "fa fa-heart-o";

  return (
    <i onClick={() => onLike(movie)} className={classes} aria-hidden="true"></i>
  );
};

export default Like;
