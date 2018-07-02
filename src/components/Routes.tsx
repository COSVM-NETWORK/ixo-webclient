import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProjectContainerConnected } from './project/ProjectContainer';
import { ProjectsContainerConnected } from './projects/ProjectsContainer';
import { Projects } from './projects/ProjectsContainer';
import { ProjectCreateConnected } from './project/ProjectCreate';
import { contentType } from '../types/models';
import { ProjectForm } from './project/ProjectForm';
import { HomePage } from './public/HomePage';
import { Fragment } from 'react';
import { Widgets } from './widgets/Widgets';
import { Icons } from './common/Icons';
import { RegisterConnected } from './register/RegisterPage';
import { Spinner } from './common/Spinner';

export namespace Routes {
	export interface StateProps {
		projectList: any;
	}

	export interface RouteProps extends StateProps {}
}

export const Routes: React.SFC<Routes.RouteProps> = props => {
	return (
		<Switch>
			<Route exact={true} path="/spinner" component={Spinner} />
			<Route exact={true} path="/homepage" component={HomePage} />
			<Route exact={true} path="/widgets" component={Widgets} />
			<Route exact={true} path="/json" component={ProjectForm} />
			<Route exact={true} path="/icons" component={Icons} />
			<Route exact={true} path="/register" component={RegisterConnected} />
			<Route
				exact={true}
				path="/"
				render={routeProps => (
					<Fragment>
						<ProjectsContainerConnected
							// {...routeProps}
							// {...props}
							projectList={props.projectList}
						/>
					</Fragment>
				)}
			/>
			<Route
				exact={true}
				path="/global-statistics"
				render={routeProps => (
					<Fragment>
						<Projects
							{...routeProps}
							{...props}
							projectList={props.projectList}
						/>
					</Fragment>
				)}
			/>
			<Route
				exact={true}
				path="/my-projects"
				render={routeProps => (
					<Fragment>
						<Projects
							{...routeProps}
							{...props}
							projectList={props.projectList}
						/>
					</Fragment>
				)}
			/>
			<Route
				exact={true}
				path="/projects/:projectDID/overview"
				render={() => (
					<ProjectContainerConnected
						contentType={contentType.overview}
					/>
				)}
			/>
			<Route
				exact={true}
				path="/projects/:projectDID/detail/"
				render={() => (
					<ProjectContainerConnected
						contentType={contentType.dashboard}
					/>
				)}
			/>
			<Route
				exact={true}
				path="/projects/:projectDID/detail/evaluators"
				render={() => (
					<ProjectContainerConnected
						contentType={contentType.evaluators}
					/>
				)}
			/>
			<Route
				exact={true}
				path="/projects/:projectDID/detail/investors"
				render={() => (
					<ProjectContainerConnected
						contentType={contentType.investors}
					/>
				)}
			/>
			<Route
				exact={true}
				path="/projects/:projectDID/detail/service-providers"
				render={() => (
					<ProjectContainerConnected
						contentType={contentType.serviceProviders}
					/>
				)}
			/>
			<Route
				exact={true}
				path="/projects/:projectDID/detail/claims"
				render={() => (
					<ProjectContainerConnected
						contentType={contentType.claims}
					/>
				)}
			/>
			<Route
				exact={true}
				path="/projects/:projectDID/detail/new-claim"
				render={() => (
					<ProjectContainerConnected
						contentType={contentType.newClaim}
					/>
				)}
			/>
			<Route
				exact={true}
				path="/projects/:projectDID/detail/claims/:claimID"
				render={() => (
					<ProjectContainerConnected
						contentType={contentType.singleClaim}
					/>
				)}
			/>
			<Route
				exact={true}
				path="/create-project"
				render={routeProps => (
					<Fragment>
						<ProjectCreateConnected {...routeProps} {...props} />
					</Fragment>
				)}
			/>
		</Switch>
	);
};
