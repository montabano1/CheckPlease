import React from 'react';
import { connect } from 'react-redux';
import { stars } from '../stars';

const Review = ({ review }) => {
  const { rating, body } = review;

  return (
    <div className='review-item'>
      <ul>
        <li className='review-rating'>Rating: {stars[rating]}</li>
        <li className='review-body'>{body} </li>

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
