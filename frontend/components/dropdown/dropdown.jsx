import React from 'react';
import { closeDropdown } from '../../actions/dropdown_actions';
import { connect } from 'react-redux';
import LocationContainer from '../session/location_container';


function Dropdown({dropdown, closeDropdown}) {
  if (!dropdown) {
    return null;
  }
  let component;
  switch (dropdown) {

    case 'location':
      component = <LocationContainer className='dropdown-child-container'/>;
      break;
    default:
      return null;
  }
  return (
    <div className="dropdown-background" onClick={closeDropdown}>
      <div className="dropdown-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    dropdown: state.ui.dropdown
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeDropdown())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dropdown);
