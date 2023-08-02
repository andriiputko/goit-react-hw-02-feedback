const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      {options.map(option => (
        <button onClick={onLeaveFeedback}>{option}</button>
      ))}
    </>
  );
};

export default FeedbackOptions;
