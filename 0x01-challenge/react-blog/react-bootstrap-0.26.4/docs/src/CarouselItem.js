import React from 'react';
import classNames from 'classnames';
import TransitionEvents from './utils/TransitionEvents';

const CarouselItem = React.createClass({
  propTypes: {
    direction: React.PropTypes.oneOf(['prev', 'next']),
    onAnimateOutEnd: React.PropTypes.func,
    active: React.PropTypes.bool,
    animateIn: React.PropTypes.bool,
    animateOut: React.PropTypes.bool,
    caption: React.PropTypes.node,
    index: React.PropTypes.number
  },

  getInitialState() {
    return {
      direction: null
    };
  },

