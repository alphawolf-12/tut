import React, {Fragment} from 'react';

function NavBar (props){
    const {logInStatus} = props;
    return (
    <div className="navbar">
        {logInStatus ? 
            <div className="flex--jcc"> 
                <div className="link"> Home </div>
                <button onClick={props.handleLogOut} className="log--btn"> Log Out </button>
            </div> 
            : <div className="flex--jfs"> 
                <button onClick={props.handleLogIn} className="log--btn"> Log In </button>
              </div>
            }
    </div>
    );
}

export default NavBar;