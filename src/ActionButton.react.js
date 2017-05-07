'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ActionButton extends Component {

    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

	getInitialProps() {
		return {
			onClick   : function () {},
			className : 'btn',
			url       : null
		};
	}

    handleClick() {
		return this.props.onClick();
	}

	render() {
		var className = this.props.className, url = false;

		if (this.props.url) {
			if (this.props.url !== '#') {
				url = true;
			}

			if (!url) {
				return (<a target="_blank" className={className}>{this.props.children}</a>);
			}

			return (<a href={this.props.url} target="_blank" className={className}>{this.props.children}</a>);
		}

		return (
			<button onClick={this.handleClick} className={className}>
				{this.props.children}
			</button>
		);
	}

};

ActionButton.propTypes = {
    children: PropTypes.node.isRequired
}


export default ActionButton;
