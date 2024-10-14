// FeedbackForm.js
import React, { useState } from 'react';
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted: ' + feedback);
  };

  return (
    <form onSubmit={handleSubmit} className="feedback-form">
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Your feedback"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
