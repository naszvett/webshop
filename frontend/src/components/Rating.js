function Stars(props) {
  const { rating, starNumber } = props;
  return (
    <i
      className={
        rating >= starNumber
          ? 'fas fa-star'
          : rating >= starNumber - 0.5
          ? 'fas fa-star-half-alt'
          : 'far fa-star'
      }
    />
  );
}

function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <Stars rating={rating} starNumber={1} />
        <Stars rating={rating} starNumber={2} />
        <Stars rating={rating} starNumber={3} />
        <Stars rating={rating} starNumber={4} />
        <Stars rating={rating} starNumber={5} />
      </span>
      <span> {numReviews} reviews</span>
    </div>
  );
}

export default Rating;
