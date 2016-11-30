import React from 'react';

class ContestPreview extends React.Component {
  handleClick= () => {
    this.props.onClick(this.props.id);
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
  id: React.PropTypes.number.isRequired,
  categoryName: React.PropTypes.string.isRequired,
  contestName: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default ContestPreview;
