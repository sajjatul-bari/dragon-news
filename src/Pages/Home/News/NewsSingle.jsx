const NewsSingle = ({ newsSingle }) => {
  const { rating } = newsSingle;
  return (
    <div>
      <h2>{rating}</h2>
    </div>
  );
};

export default NewsSingle;
