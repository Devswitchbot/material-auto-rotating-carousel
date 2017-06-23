'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _IconButton = require('material-ui/IconButton');

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _colors = require('material-ui/styles/colors');

var _arrowBack = require('material-ui/svg-icons/navigation/arrow-back');

var _arrowBack2 = _interopRequireDefault(_arrowBack);

var _arrowForward = require('material-ui/svg-icons/navigation/arrow-forward');

var _arrowForward2 = _interopRequireDefault(_arrowForward);

var _materialUiDots = require('material-ui-dots');

var _materialUiDots2 = _interopRequireDefault(_materialUiDots);

var _SwipableCarouselView = require('./SwipableCarouselView');

var _SwipableCarouselView2 = _interopRequireDefault(_SwipableCarouselView);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var desktopStyles = {
  arrowLeft: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 'calc((100% - 96px) / 2 + 24px)',
    left: -96
  },
  arrowRight: {
    width: 48,
    height: 48,
    position: 'absolute',
    top: 'calc((100% - 96px) / 2 + 24px)',
    right: -96
  },
  carouselWrapper: {
    overflow: 'hidden',
    borderRadius: 14,
    transform: 'scale(1.0)',
    background: 'transparent',
    height: '100%'
  },
  arrowIconButton: {
    width: 48,
    height: 48,
    padding: 4
  },
  arrowIcon: {
    color: _colors.grey700
  },
  root: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 1400,
    left: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    transition: 'opacity 400ms cubic-bezier(0.4, 0, 0.2, 1)'
  },
  content: {
    width: '60%',
    maxWidth: 700,
    height: 'calc(100% - 96px)',
    maxHeight: 600,
    margin: '-16px auto 0',
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)'
  },
  dots: {
    paddingTop: 36,
    margin: '0 auto'
  },
  footer: {
    marginTop: -72,
    width: '100%',
    position: 'relative',
    textAlign: 'center'
  },
  slide: {
    width: '100%',
    height: '100%'
  },
  carousel: {
    height: '100%'
  },
  carouselContainer: {
    height: '100%'
  }
};

var mobileStyles = {
  root: {
    height: '100%',
    width: '100%',
    position: 'fixed',
    zIndex: 1400,
    left: 0,
    top: 0
  },
  content: {},
  dots: {
    margin: '0 auto'
  },
  dotsLandscape: {
    paddingTop: 20,
    margin: '0 auto'
  },
  footer: {
    marginTop: -150,
    width: '100%',
    position: 'relative',
    textAlign: 'center'
  },
  footerLandscape: {
    marginTop: -3,
    transform: 'translateY(-50vh)',
    textAlign: 'center',
    display: 'inline-block'
  },
  slide: {
    width: '100%',
    height: '100vh'
  }
};

var AutoRotatingCarousel = function (_Component) {
  _inherits(AutoRotatingCarousel, _Component);

  function AutoRotatingCarousel(props) {
    _classCallCheck(this, AutoRotatingCarousel);

    var _this = _possibleConstructorReturn(this, (AutoRotatingCarousel.__proto__ || Object.getPrototypeOf(AutoRotatingCarousel)).call(this, props));

    _this.handleChange = function (slideIndex) {
      _this.setState({
        slideIndex: slideIndex
      }, _this.onChange(slideIndex));
    };

    _this.state = {
      slideIndex: 0
    };
    return _this;
  }

  _createClass(AutoRotatingCarousel, [{
    key: 'decreaseIndex',
    value: function decreaseIndex() {
      var slideIndex = this.state.slideIndex - 1;
      this.setState({
        slideIndex: slideIndex
      }, this.onChange(slideIndex));
    }
  }, {
    key: 'increaseIndex',
    value: function increaseIndex() {
      var slideIndex = this.state.slideIndex + 1;
      this.setState({
        slideIndex: slideIndex
      }, this.onChange(slideIndex));
    }
  }, {
    key: 'onChange',
    value: function onChange(slideIndex) {
      if (this.props.onChange) {
        this.props.onChange((0, _util.modulo)(slideIndex, this.props.children.length));
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.props.mobile ? mobileStyles : desktopStyles;
      var landscape = this.props.mobile && this.props.landscape;

      return _react2.default.createElement(
        'div',
        {
          style: _extends({}, style.root, {
            pointerEvents: this.props.open ? null : 'none',
            opacity: this.props.open ? '1' : '0'
          }, this.props.style),
          onTouchTap: this.props.onRequestClose
        },
        _react2.default.createElement(
          'div',
          { style: _extends({}, style.content, this.props.contentStyle),
            onTouchTap: function onTouchTap(evt) {
              return evt.stopPropagation() || evt.preventDefault();
            } },
          _react2.default.createElement(
            _Paper2.default,
            {
              zDepth: this.props.mobile ? 0 : 1,
              style: style.carouselWrapper },
            _react2.default.createElement(
              _SwipableCarouselView2.default,
              {
                autoplay: this.props.open && this.props.autoplay,
                interval: this.props.interval,
                index: this.state.slideIndex,
                onChangeIndex: this.handleChange,
                style: style.carousel,
                containerStyle: style.carouselContainer,
                slideStyle: style.slide
              },
              this.props.children.map(function (c, i) {
                return _react2.default.cloneElement(c, {
                  mobile: _this2.props.mobile,
                  landscape: _this2.props.landscape,
                  key: i
                });
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { style: landscape ? { minWidth: 300, maxWidth: 'calc(50% - 48px)', padding: 24, float: 'right' } : null },
            _react2.default.createElement(
              'div',
              { style: landscape ? style.footerLandscape : style.footer },
              _react2.default.createElement(_RaisedButton2.default, {
                label: this.props.label,
                onTouchTap: this.props.onStart
              }),
              _react2.default.createElement(_materialUiDots2.default, {
                count: this.props.children.length,
                index: (0, _util.modulo)(this.state.slideIndex, this.props.children.length),
                style: landscape ? style.dotsLandscape : style.dots,
                onDotClick: this.handleChange
              })
            )
          ),
          !this.props.mobile ? _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _Paper2.default,
              {
                style: style.arrowLeft,
                circle: true
              },
              _react2.default.createElement(
                _IconButton2.default,
                {
                  style: style.arrowIconButton,
                  iconStyle: style.arrowIcon,
                  onTouchTap: function onTouchTap() {
                    return _this2.decreaseIndex();
                  },
                  touch: true
                },
                _react2.default.createElement(_arrowBack2.default, null)
              )
            ),
            _react2.default.createElement(
              _Paper2.default,
              {
                style: style.arrowRight,
                circle: true
              },
              _react2.default.createElement(
                _IconButton2.default,
                {
                  style: style.arrowIconButton,
                  iconStyle: style.arrowIcon,
                  onTouchTap: function onTouchTap() {
                    return _this2.increaseIndex();
                  },
                  touch: true
                },
                _react2.default.createElement(_arrowForward2.default, null)
              )
            )
          ) : null
        )
      );
    }
  }]);

  return AutoRotatingCarousel;
}(_react.Component);

exports.default = AutoRotatingCarousel;


AutoRotatingCarousel.defaultProps = {
  autoplay: true,
  interval: 3000,
  mobile: false,
  open: false
};

AutoRotatingCarousel.propTypes = {
  /** If `false`, the auto play behavior is disabled. */
  autoplay: _propTypes2.default.bool,
  /** Override the inline-styles of the content container. */
  contentStyle: _propTypes2.default.object,
  /** Delay between auto play transitions (in ms). */
  interval: _propTypes2.default.number,
  /** Button text. */
  label: _propTypes2.default.string.isRequired,
  /** If `true`, slide will adjust content for wide mobile screens. */
  landscape: _propTypes2.default.bool,
  /** If `true`, the screen width and height is filled. */
  mobile: _propTypes2.default.bool,
  /** Fired when the index changed. Returns current index. */
  onChange: _propTypes2.default.func,
  /** Fired when the gray background of the popup is pressed when it is open. */
  onRequestClose: _propTypes2.default.func,
  /** Fired when the user clicks the getting started button. */
  onStart: _propTypes2.default.func,
  /** Controls whether the AutoRotatingCarousel is opened or not. */
  open: _propTypes2.default.bool,
  /** Override the inline-styles of the root component. */
  style: _propTypes2.default.object
};