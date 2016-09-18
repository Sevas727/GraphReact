import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
        <Link to="/Graphic1" activeClassName="active">Graphic1</Link>
      {" | "}
      <Link to="/Graphic2" activeClassName="active">Graphic2</Link>
    </nav>
  );
};

export default Header;
