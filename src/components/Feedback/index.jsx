import { Options } from './Feedback.styled';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map((option, id) => (
        <Options type="button" key={id} name={option} onClick={onLeaveFeedback}>
          {option}
        </Options>
      ))}
    </>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};
