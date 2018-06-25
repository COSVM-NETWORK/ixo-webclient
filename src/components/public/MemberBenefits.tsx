import * as React from 'react';
import styled from 'styled-components';

const tickImg = require('../../assets/images/member/icon-tick.svg');

const MemberContainer = styled.div`
	margin: 60px 0 100px;
	text-align: center;
	h2 {
		font-size: 60px;
		font-family: ${props => props.theme.fontRobotoCondensed};
		margin-bottom: 0;
		width: 100%;
		text-align: left;
	}
	button {
		background: none;
		color: ##282828;
		border: 1px solid #49BFE0;
		padding: 10px 150px;
		text-transform: uppercase;
		font-size: 15px;
		font-family: ${props => props.theme.fontRobotoCondensed};
		margin-top: 20px;
	}
`;

const MemberCards = styled.div`

`;

const Card = styled.div`
	display: flex;
	align-items: center;
	background: linear-gradient(180deg, #FFFFFF 0%, #F4F4F4 100%);
	box-shadow: 50px 19px 38px rgba(0,0,0,0.01), 0 10px 22px rgba(0,0,0,0.06);
	padding: 20px;
	margin-bottom: 20px;
	min-height: 88px;
	p {
		margin-left: 10px;
		margin-bottom: 0;
	}
`;

export interface ParentProps { }

export const MemberBenefits: React.SFC<ParentProps> = (props) => {
	return (
		<MemberContainer>
			<div className="row">
				<div className="col-md-2" />
				<div className="col-md-10">
					<h2>Member benefits</h2>
				</div>
			</div>
			<MemberCards className="row">
				<div className="col-md-2" />
				<div className="col-md-4">
					<Card>
						<div><img src={tickImg} alt="" /></div>
						<p>Connect with people worldwide, all walks of life, and all backgrounds who share a common goal</p>
					</Card>
					<Card>
						<div><img src={tickImg} alt="" /></div>
						<p>Get notified of ixo events in your area</p>
					</Card>
					<Card>
						<div><img src={tickImg} alt="" /></div>
						<p>10% discount on ixo apparel and merchandise</p>
					</Card>
				</div>
				<div className="col-md-4">
					<Card>
						<div><img src={tickImg} alt="" /></div>
						<p>Exclusive news and updates</p>
					</Card>
					<Card>
						<div><img src={tickImg} alt="" /></div>
						<p>Get automatically added to our Token Sale Whitelist</p>
					</Card>
					<Card>
						<div><img src={tickImg} alt="" /></div>
						<p>First access to our ixo.world alpha launches</p>
					</Card>
				</div>
				<div className="col-md-2" />
			</MemberCards>
			<div className="row">
				<div className="col-md-12">
					<button>become a member</button>
				</div>
			</div>
		</MemberContainer>
	);
};