import React from 'react';

class ContestPreview extends React.Component {
  handleClick= () => {
    this.props.onClick(this.props._id);
  }
  render() {
    return (
    <div className="link ContestPreview">
        <div className="category-name" onClick={this.handleClick}>
          {this.props.categoryName}
        </div>
        <div className="contest-name">
          {this.props.contestName}
        </div>
    </div>);
  }
}

ContestPreview.propTypes = {
  _id: React.PropTypes.string.isRequired,
  categoryName: React.PropTypes.string.isRequired,
  contestName: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default ContestPreview;
