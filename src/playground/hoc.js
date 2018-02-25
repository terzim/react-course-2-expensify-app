// Hihger order component - a Component that renders another component
// HOC allows to reuse code, render hijacking, prop manipulation and abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
	<div>
		<h1>Info</h1>
		<p>The info is: {props.info}</p>
	</div>
);

const withAdminWarning = (WrappedComponent) => {
	return (props) => (
		<div>
			{ props.isAdmin && <p>This is private info</p>}
			<WrappedComponent {...props}/>
		</div>
	);
};

const requireAuthentication = (WrappedComponent) => {
	return (props) => (
		<div>
			{ !props.isAuthenticated && <p>This requires authentication</p>}
			{ props.isAuthenticated && <WrappedComponent {...props}/> }
		</div>
	);
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="these are the info" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="these are the info" />, document.getElementById('app'));