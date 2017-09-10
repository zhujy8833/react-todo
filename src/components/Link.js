import React from 'react';
import PropTypes from 'prop-types';

export default class Link extends React.Component {
  static propTypes = {
    active: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
  }

  onClick = (e) => {
    e.preventDefault();

    const { onClick } = this.props;

    onClick();
  }

  render() {
    const { active, children } = this.props;

    if (active) {
      return <span>{children}</span>;
    }

    return (
      <a href="#"
        onClick={this.onClick}
      >
        {children}
      </a>
    );
  }
}