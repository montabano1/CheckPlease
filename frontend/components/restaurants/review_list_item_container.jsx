import React from 'react';
import { connect } from 'react-redux';

const Review = ({ review, author }) => {
  const { rating, body } = review;
  return (
    <div>
      <ul>
        <li>Rating: {rating}</li>
        <li>{body} </li>

      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    author: state.session.id || {}
  };
};

export default connect(mapStateToProps)(Review);
