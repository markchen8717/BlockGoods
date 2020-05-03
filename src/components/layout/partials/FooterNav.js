import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/secondary/">About Us</Link>
        </li>
        <li>
          <Link to="/faq">FAQ's</Link>
        </li>
        <li>
          <Link to="/">Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;