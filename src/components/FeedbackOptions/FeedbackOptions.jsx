const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      {options.map(option => (
        <button key={option} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
      ))}
    </>
  );
};

export default FeedbackOptions;
