import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
const logoSrc = require('../assets/images/logo.png');

const HeaderLink = styled(NavLink)`
	padding:10px 20px 10px;
	color:white;
	text-transform:uppercase;
	margin:0 10px;
	font-size:15px;

	&.active {
		border:1px solid #49bfe0;
		border-radius:3px;
	}

	:hover {
		text-decoration:none;
		color:#49bfe0;
	}
`;

const Main = styled.div`
	padding:15px 20px;
`;

const IXOLogo = styled.img`
	height: 40px;
	margin-right:20px;
`;

export const HeaderLeft: React.SFC<any> = () => {
	return (
		<Main className="col-6 d-flex align-items-center">
			<Link to="/"><IXOLogo src={logoSrc} alt="IXO Logo" /></Link>
			<HeaderLink exact={true} to="/">Explore</HeaderLink>
			<HeaderLink exact={true} to="/CreateProject">Create Project</HeaderLink>
		</Main>
	);
};