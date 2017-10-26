import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  console.log(auth);
  const authBtn = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );
  return (
    <div>
      <Link to="/">首页</Link>
      <div>
        <Link to="/users">用户列表</Link>
        <Link to="/admins">Admins</Link>
        {authBtn}
      </div>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
