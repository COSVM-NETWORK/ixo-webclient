import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { PublicSiteStoreState } from '../../redux/public_site_reducer';
import { contentType, AgentRoles } from '../../types/models';
import { ProjectHero } from './ProjectHero';
import { ProjectOverview } from './ProjectOverview';
import { setActiveProject } from '../../redux/activeProject/activeProject_action_creators';
import { ProjectDashboard } from './ProjectDashboard';
import { ProjectNewClaim } from './ProjectNewClaim';
import { ProjectSingleClaim } from './ProjectSingleClaim';
import { ProjectClaims } from './ProjectClaims';
import styled from 'styled-components';
import { ProjectAgents } from './ProjectAgents';
import { Spinner } from '../common/Spinner';
import { UserInfo } from '../../types/models';
import { ProjectSidebar } from './ProjectSidebar';

const Loading = styled.div`
	display:flex;
	justify-content:center;
	align-items:center;
	height:calc(100vh - 140px);
`;

const DetailContainer = styled.div`
	display:flex;
	height: 100%;
`;
export interface State {
	isModalOpen: boolean;
	modalData: any;
	project: Object;
	ClaimList: Object[];
	PDSUrl: string;
	Agents: Object;
	selectedRoleToCreate: AgentRoles;
}

export interface StateProps {
	ixo?: any;  
	projectDid?: any;
	keysafe?: any;
	userInfo?: UserInfo;
}

export interface DispatchProps {
	onSetActiveProject?: (project: any) => void;
}

export interface ParentProps {    
	location: any;   
	contentType: contentType;
	match: any;
}

export interface Props extends ParentProps, StateProps, DispatchProps {}

export class ProjectContainer extends React.Component<Props> {

	state = {
		isModalOpen: false,
		modalData: {},
		project: null,
		claims: null,
		serviceProviders: null,
		investors: null,
		evaluators: null,
		PDSUrl: 'http://104.155.142.57:5000/'
	};

	handleToggleModal = (data: any, modalStatus: boolean) => {
		this.setState({ modalData: data, isModalOpen: modalStatus });
	}

	componentDidMount() {
		console.log(this.props.userInfo);
		this.handleGetProjectData();
	}

	handleGetProjectData = () => {
		if (this.state.project === null) {
			this.props.onSetActiveProject(this.props.match.params.projectDID);
			const did = this.props.match.params.projectDID;
			this.props.ixo.project.getProjectByDid(did).then((response: any) => {
				this.setState({ project: response.result.data});
			}).catch((result: Error) => {
				console.log(result);
			});
		}
	}

	handleListClaims = () => {
		if (this.state.claims === null) {
			const ProjectDIDPayload: Object = { projectDid: this.props.projectDid};
			this.props.keysafe.requestSigning(JSON.stringify(ProjectDIDPayload), (error, signature) => {	
				if (!error) {
					this.props.ixo.claim.listClaimsForProject(ProjectDIDPayload, signature, this.state.PDSUrl).then((response: any) => {
						this.setState({claims: response.result});
					}).catch((result: Error) => {
						console.log((result));
					});
				} else {
					console.log(error);
				}
			});
		}
	}

	handleRenderClaims = () => {
		if (this.state.claims === null) {
			this.handleListClaims();
			return <Loading className="col-md-12"><p>Loading...</p></Loading>;
		} else if (this.state.claims.length > 0) {		
			return (
				<div>
					<ProjectHero project={this.state.project} match={this.props.match} isDetail={true} />
					<ProjectClaims claims={this.state.claims} projectDid={this.props.projectDid}/>
				</div>
			);
		} else {
			return (
				<div>
					<ProjectHero project={this.state.project} match={this.props.match} isDetail={true} />
					<DetailContainer>
						<ProjectSidebar match={this.props.match} projectDid={this.props.projectDid}/>
						<Loading className="container-fluid"><p>No Claims found</p></Loading>
					</DetailContainer>
				</div>
			);
		} 
	}

	handleRenderAgents = (agentRole: string) => {
		if (this.state[agentRole] === null) {
			this.handleListAgents(agentRole);
			return <Loading className="col-md-12"><p>Loading...</p></Loading>;
		} else if (this.state[agentRole].length > 0) {
			return (
				<div>
					<ProjectHero project={this.state.project} match={this.props.match} isDetail={true} />
					<DetailContainer>
						<ProjectSidebar match={this.props.match} projectDid={this.props.projectDid}/>
						<ProjectAgents agents={...this.state[agentRole]} handleUpdateAgentStatus={this.handleUpdateAgent}/>
					</DetailContainer>
				</div>
			);
		} else {
			return (
				<div>
					<ProjectHero project={this.state.project} match={this.props.match} isDetail={true} />
					<DetailContainer>
						<ProjectSidebar match={this.props.match} projectDid={this.props.projectDid}/>
						<Loading className="container-fluid"><p>No Agents found</p></Loading>
					</DetailContainer>
				</div>
			);
		}
	}

	handleListAgents = (agentRole: string) => {
		
		if (this.state[agentRole] === null) {
			this.state[agentRole] = [];
			console.log(agentRole);
			const ProjectDIDPayload: Object = { projectDid: this.props.projectDid, role: AgentRoles[agentRole]};
			this.props.keysafe.requestSigning(JSON.stringify(ProjectDIDPayload), (error, signature) => {	
				if (!error) {
					this.props.ixo.agent.listAgentsForProject(ProjectDIDPayload, signature, this.state.PDSUrl).then((response: any) => {
						if (response.error) {
							console.log('error occured', response.error);
						} else {
							let agentsObj = [];
							if (this.state[agentRole] !== null) {
								agentsObj = [...this.state[agentRole]];
							}
							agentsObj = response.result;
							this.setState({ [agentRole] : [...agentsObj]});
						}
					}).catch((result: Error) => {
						console.log((result));
					});
				} else {
					console.log(error);
				}
			});
		}
	}

	checkUserDid = () => {
		if (this.props.keysafe === null || this.props.userInfo === null) {
			window.alert('Please install IXO Credential Manager first.');
			return false;
		} else {
			return true;
		}
	}

	handleCreateAgent = (agentFormData) => {
		if (this.checkUserDid() == null) {
			return;
		}
		const agentData = {
			email: agentFormData.email,
			name: agentFormData.name,
			role: agentFormData.role,
			agentDid: this.props.userInfo.didDoc.did,
			projectDid: this.props.projectDid
		};
		this.props.keysafe.requestSigning(JSON.stringify(agentData), (error: any, signature: any) => {
			if (!error) {
				this.props.ixo.agent.createAgent(agentData, signature, this.state.PDSUrl).then((res) => {
					console.log('AGENT CREATE STATUS: ', res);
				});
			} else {
				console.log(error);
			}
		});
	}

	handleUpdateAgent = (statusObj: any, did: string, role: string) => {
		let agentPaylod = {
			agentDid: did,
			status: statusObj.status,
			projectDid: this.props.projectDid,
			role: role
		};

		if (statusObj.version) {
			agentPaylod['version'] = statusObj.version;
		}

		this.props.keysafe.requestSigning(JSON.stringify(agentPaylod), (error, signature) => {
			if (!error) {
				this.props.ixo.agent.updateAgentStatus(agentPaylod, signature, this.state.PDSUrl).then((res) => {
					console.log(res);
				}); 
			} else {
				console.log(error);
			}
		});
	}

	handleEvaluateClaim = (statusObj: any, id: string) => {
		let claimPayload = {
			claimId: id,
			status: statusObj.status,
			projectDid: this.props.projectDid,
		};

		if (statusObj.version) {
			claimPayload['version'] = statusObj.version;
		}

		this.props.keysafe.requestSigning(JSON.stringify(claimPayload), (error, signature) => {
			if (!error) {
				this.props.ixo.claim.evaluateClaim(claimPayload, signature, this.state.PDSUrl).then((res) => {
					console.log(res);
				}); 
			} else {
				console.log(error);
			}
		});
	}

	handleSubmitClaim = (claimData) => {
		let claimPayload = Object.assign(claimData);
		claimPayload['projectDid'] = this.props.projectDid;
		this.props.keysafe.requestSigning(JSON.stringify(claimPayload), (error, signature) => {			
			if (!error) {
				this.props.ixo.claim.createClaim(claimPayload, signature, this.state.PDSUrl).then((response) => {
					console.log('claim has been submitted successfully', response);
				}).catch((claimError: Error) => {
					console.log(claimError);
				});
			} else {
				console.log(error);
			}
		});
	}

	handleRenderProject = () => {
		if (this.state.project === null) {
			return <Spinner info="ProjectContainer: Loading Project"/>;
		} else {
			const project = this.state.project;

			switch (this.props.contentType) {
				case contentType.overview:
					return (
						<div>
							<ProjectHero project={project} match={this.props.match} isDetail={false} />
							<ProjectOverview
								checkUserDid={this.checkUserDid} 
								handleCreateAgent={this.handleCreateAgent}
								userInfo={this.props.userInfo}
								project={project}
								id={project._id}
								isModalOpen={this.state.isModalOpen}
								handleToggleModal={this.handleToggleModal}
								modalData={this.state.modalData}
							/>
						</div>
					);
				case contentType.dashboard:
					return (
						<div>
							<ProjectHero project={project} match={this.props.match} isDetail={true} />
							<DetailContainer>
								<ProjectSidebar match={this.props.match} projectDid={this.props.projectDid}/>
								<ProjectDashboard projectDid={this.props.projectDid}/>
							</DetailContainer>
						</div>
					);
				case contentType.newClaim:
					return (
						<div>
							<ProjectHero project={project} match={this.props.match} isDetail={true}  />
							<DetailContainer>
								<ProjectSidebar match={this.props.match} projectDid={this.props.projectDid}/>
								<ProjectNewClaim submitClaim={(claimData) => this.handleSubmitClaim(claimData)}/>
							</DetailContainer>
						</div>
					);
				case contentType.singleClaim:
					return (
						<div>
							<ProjectHero project={project} match={this.props.match} isDetail={true}  />
							<DetailContainer>
								<ProjectSidebar match={this.props.match} projectDid={this.props.projectDid}/>
								<ProjectSingleClaim 
									claims={this.state.claims}
									match={this.props.match}
									handleListClaims={this.handleListClaims}
									handleEvaluateClaim={this.handleEvaluateClaim}
								/>
							</DetailContainer>
						</div>
					);
				case contentType.claims:
					return this.handleRenderClaims();
				case contentType.evaluators:
					return this.handleRenderAgents('evaluators');
				case contentType.investors:
					return this.handleRenderAgents('investors');
				case contentType.serviceProviders:
					return this.handleRenderAgents('serviceProviders');
				default:
					return <p>Nothing to see here...</p>;
			}
		}
	}
		// if (performance.navigation.type === 1) {
		// 	console.info( 'This page is reloaded' );
		// } else {
		// 	console.info( 'This page is not reloaded');
		// }	
	render() {
		return(
			<div>
				{this.handleRenderProject()}
			</div>	
		);	
	}
}

function mapStateToProps(state: PublicSiteStoreState) {
	return {
		ixo: state.ixoStore.ixo,
		projectDid: state.activeProjectStore.projectDid,
		keysafe: state.keysafeStore.keysafe,
		userInfo: state.loginStore.userInfo,
	};
}

function mapDispatchToProps(dispatch: any): DispatchProps {
	return {
		onSetActiveProject: (project) => {
			dispatch(setActiveProject(project));
		},
	};
}

export const ProjectContainerConnected = withRouter<Props & RouteComponentProps<{}>>(connect(
	mapStateToProps,
	mapDispatchToProps
)(ProjectContainer as any) as any);