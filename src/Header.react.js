'use strict';

import React, {Component} from 'react';

class Header extends Component{

	getInitialProps() {
		return {
			title:     null,
			className: null
		};
	}

	render() {
		if (this.props.title) {
			return (
				<header className={this.props.className}>
					<h1 className={this.props.className + '__title'}>{this.props.title}</h1>
				</header>
			);
		}

		return null;
	}

};

export default Header;
