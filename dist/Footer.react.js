'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ActionButton = require('./ActionButton.react');

var _ActionButton2 = _interopRequireDefault(_ActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ButtonsSpace = function (_Component) {
	_inherits(ButtonsSpace, _Component);

	function ButtonsSpace() {
		_classCallCheck(this, ButtonsSpace);

		return _possibleConstructorReturn(this, (ButtonsSpace.__proto__ || Object.getPrototypeOf(ButtonsSpace)).apply(this, arguments));
	}

	_createClass(ButtonsSpace, [{
		key: 'getInitialProps',
		value: function getInitialProps() {
			return {
				buttons: null,
				className: null,
				onOk: null,
				onClose: null,
				buttonClick: null,
				btnClass: null,
				href: null
			};
		}
	}, {
		key: 'onOk',
		value: function onOk() {
			if (this.props.onOk) {
				return this.props.onOk();
			}
		}
	}, {
		key: 'onClose',
		value: function onClose() {
			if (this.props.onClose) {
				return this.props.onClose();
			}
		}
	}, {
		key: 'buttonClick',
		value: function buttonClick(action) {
			if (this.props.buttonClick) {
				return this.props.buttonClick(action);
			}
		}
	}, {
		key: 'wildClass',
		value: function wildClass(className, base) {
			if (!className) {
				return null;
			}

			if (this.props.wildClasses) {
				return className;
			}

			var finalClass = [],
			    classNames = className.split(' ');

			classNames.forEach(function (className) {
				finalClass.push(base + '--' + className);
			});

			return finalClass.join(' ');
		}
	}, {
		key: 'render',
		value: function render() {
			if (!this.props.buttons) {
				return null;
			}

			var i,
			    btns = [],
			    btn,
			    className,
			    url;

			for (i = 0; i < this.props.buttons.length; i++) {
				btn = this.props.buttons[i];
				url = btn.url ? btn.url : null;

				if (typeof btn === 'string') {
					if (btn === 'ok') {
						btns.push(_react2.default.createElement(
							_ActionButton2.default,
							{ className: this.props.btnClass + ' ' + this.props.btnClass + '--ok', key: i, onClick: this.onOk },
							this.props.defaultOk
						));
					} else if (btn === 'cancel') {
						btns.push(_react2.default.createElement(
							_ActionButton2.default,
							{ className: this.props.btnClass + ' ' + this.props.btnClass + '--cancel', key: i, onClick: this.onClose },
							this.props.defaultCancel
						));
					}
				} else {
					className = this.props.btnClass + ' ' + this.wildClass(btn.className, this.props.btnClass);
					btns.push(_react2.default.createElement(
						_ActionButton2.default,
						{ className: className, key: i, url: url, onClick: this.buttonClick.bind(this, btn.action) },
						btn.text
					));
				}
			}

			return _react2.default.createElement(
				'div',
				{ className: this.props.className },
				btns
			);
		}
	}]);

	return ButtonsSpace;
}(_react.Component);

;

var Footer = function (_Component2) {
	_inherits(Footer, _Component2);

	function Footer() {
		_classCallCheck(this, Footer);

		return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
	}

	_createClass(Footer, [{
		key: 'getInitialProps',
		value: function getInitialProps() {
			return {
				buttons: null,
				className: null,
				wildClasses: false,
				btnClass: null,
				defaultOk: null,
				defaultCancel: null,
				buttonClick: null,
				onOk: null,
				onClose: null
			};
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.props.buttons) {
				return _react2.default.createElement(
					'footer',
					{ className: this.props.className },
					_react2.default.createElement(ButtonsSpace, {
						buttonClick: this.props.buttonClick,
						onOk: this.props.onOk,
						onClose: this.props.onClose,
						className: this.props.className + '__left-space',
						wildClasses: this.props.wildClasses,
						btnClass: this.props.btnClass,
						defaultOk: this.props.defaultOk,
						defaultCancel: this.props.defaultCancel,
						buttons: this.props.buttons.left }),
					_react2.default.createElement(ButtonsSpace, {
						buttonClick: this.props.buttonClick,
						onOk: this.props.onOk,
						onClose: this.props.onClose,
						className: this.props.className + '__right-space',
						wildClasses: this.props.wildClasses,
						btnClass: this.props.btnClass,
						defaultOk: this.props.defaultOk,
						defaultCancel: this.props.defaultCancel,
						buttons: this.props.buttons.right })
				);
			}

			return null;
		}
	}]);

	return Footer;
}(_react.Component);

;

exports.default = Footer;