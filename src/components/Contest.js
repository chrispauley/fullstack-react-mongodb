import React from 'react';

class Contest extends React.Component {
  render() {
    return (
      <div className="Contest">
        {this.props.description}
      </div>
    );
  }
}

Contest.propTypes = {
  description: React.PropTypes.string.isRequired
};

export default Contest;
