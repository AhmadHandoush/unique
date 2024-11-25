import "@styles/home/reviews.css";

function Review({ review }) {
  return (
    <div className="review flex flex-col gap-3 justify-start ">
      <h4 className="name capitalize font-bold text-2xl">{review.name}</h4>
      <p>{review.content}</p>
    </div>
  );
}

export default Review;
