import React from 'react';
import { Link } from 'react-router-dom';
const InviteLink = () => {
  return (
    <div className="linkContainer2">
      <img
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
        alt="logo"
        className="logo"
      />
      <div className="items">
        <p>XYZ Invites you to {'<TITLE>'}</p>
        <p>{'REQUEST'}</p>
        <p>Click Below</p>
        <Link to="/test" className="mylink">
          http://test.test
        </Link>
      </div>
    </div>
  );
};

export default InviteLink;
