import React from 'react';
import { connect } from 'react-redux';

class RestaurantMap extends React.Component {

  componentDidMount() {
    const mapOptions = {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 13
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }


  render() {
    debugger
    return (
      <div id='map-container' ref={ map => this.mapNode = map } />
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    lat: ownProps.lat,
    lng: ownProps.lng
  }
}

export default connect(mapStateToProps, null)(RestaurantMap);
