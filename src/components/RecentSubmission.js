import React from 'react';
import './RecentSubmission.css';
import PropTypes from 'prop-types';

const RecentSubmission = (props) => {
  
  let lastPoemLineBlock = null;
  
  if (props.player > 1) {
    const lastPoemLine = "The " + props.lastLine.adj1 + " " + props.lastLine.noun1 + " " + props.lastLine.adv + " " + props.lastLine.verb + " the " + props.lastLine.adj2 + " " + props.lastLine.noun2 + "."

    lastPoemLineBlock = (
      <div className="RecentSubmission">
        <h3>The Most Recent Submission</h3>
        <p className="RecentSubmission__submission">{lastPoemLine}</p>
      </div>
    )
  }

  return (
    <div>{lastPoemLineBlock}</div>
  );
}

RecentSubmission.propTypes = {
  player: PropTypes.number.isRequired,
  lastPoemLineBlock: PropTypes.object
};

export default RecentSubmission;
