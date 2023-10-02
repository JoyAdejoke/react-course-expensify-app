//Higher Order Component (HOC) - A component (HOC) that renders another component
//Reuse code
// React hijacking
// Prop manipulation
// Abstract state

import React from "react";
import ReactDOM  from "react-dom";

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info, please dont check</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requiredAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view the info</p>
            )}
            
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AutoInfo = requiredAuthentication(Info);


//ReactDOM.render(<AdminInfo isAdmin={true} info="There are the the details" />, document.getElementById('app'));
ReactDOM.render(<AutoInfo isAuthenticated={true} info="There are the the details" />, document.getElementById('app'));