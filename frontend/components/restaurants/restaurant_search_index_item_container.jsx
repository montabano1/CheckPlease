import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { RestaurantSearchIndexItem } from './restaurant_search_index_item';

class RestaurantSearchIndexItemContainer extends React.Component {

  render() {
    return (
      <RestaurantSearchIndexItem className='search-index-item' key={restaurant.id}/>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let avas = [];
  let c = Object.values(ownProps.avails);
  for(let i=0; i < c.length; i++) {
    if(c[i].restaurant_id === ownProps.restaurant.id) {
      avas.push(c[i]);
    }
  }
  avas = avas.sort(function(b,c) {
    const nameb = parseInt(b.datetime.slice(11,13)) + .001*parseInt(b.datetime.slice(14,16));
    const namec = parseInt(c.datetime.slice(11,13)) + .001*parseInt(c.datetime.slice(14,16));
    if (nameb < namec) {return -1;} if (nameb > namec) {return 1;} return 0;});
  avas = avas.slice(0,5)
  return {
    avas,
    restaurant: ownProps.restaurant,
  };
};



export default connect(mapStateToProps, null)(RestaurantSearchIndexItem);
