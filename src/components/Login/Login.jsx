import React from "react";

function Login() {
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Username</label>
          <div className="ui left icon input">
            <input type="text" placeholder="Username" />
            <i className="user icon"></i>
          </div>
        </div>
        <div className="field">
          <label>Password</label>
          <div className="ui left icon input">
            <input type="password" />
            <i className="lock icon"></i>
          </div>
        </div>
        <div className="ui blue submit button">Login</div>
      </div>
    </div>
  );
}

export default Login;
