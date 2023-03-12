import { ButtonBox, Button } from './FeedbackOptions.styles';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ButtonBox>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={onLeaveFeedback}
          name={option}
        >
          {option}
        </Button>
      ))}
    </ButtonBox>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

// import React from 'react';
// import PropTypes from 'prop-types';
// import css from '../FeedbackOptions/FeedbackOptions.module.css';
// import clsx from 'clsx';

// class Feedback extends React.Component {
//   goodFeedback = () => {
//     console.log('Залишили відгук добрий');
//     console.log(this);
//   };

//   neutralFeedback = () => {
//     console.log('Залишили відгук нейтральний');
//     console.log(this);
//   };
//   badFeedback = () => {
//     console.log('Залишили відгук поганий');
//     console.log(this);
//   };

//   render() {
//     return (
//       <div className={css.feedback}>
//         <p className={css.feedback__text}>Please leave feedback</p>
//         <button
//           className={css.feedback__good}
//           type="button"
//           onClick={this.goodFeedback}
//         >
//           Good
//         </button>
//         <button
//           className={css.feedback__neutral}
//           type="button"
//           onClick={this.neutralFeedback}
//         >
//           Neutral
//         </button>
//         <button
//           className={css.feedback__bad}
//           type="button"
//           onClick={this.badFeedback}
//         >
//           Bad
//         </button>
//       </div>
//     );
//   }
// }

// Feedback.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
// };

// export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
//   <div className={css.wrapper}>
//     {options.map(option => (
//       <button
//         key={option}
//         type="button"
//         className={clsx(css.button, css[option.toLowerCase()])}
//         value={option}
//         onClick={onLeaveFeedback}
//       >
//         {option}
//       </button>
//     ))}
//   </div>
// );

// export default FeedbackOptions;

// FeedbackOptions.propTypes = {
//   options: PropTypes.array.isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };
