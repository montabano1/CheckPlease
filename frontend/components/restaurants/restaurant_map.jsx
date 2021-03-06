import React from 'react';
import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';

class RestaurantMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 16
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    new google.maps.Marker({position: mapOptions.center, map: this.map});
  }
  componentWillReceiveProps(newProps) {
    const mapOptions = {
      center: { lat: newProps.lat, lng: newProps.lng },
      zoom: 16
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    new google.maps.Marker({position: mapOptions.center, map: this.map});
  }


  render() {
    return (
      <div id='map-container' ref={ map => this.mapNode = map } />
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    lat: ownProps.lat,
    lng: ownProps.lng,
    restaurant: ownProps.restaurant
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
  };
};


export default connect(mapStateToProps, null)(RestaurantMap);
