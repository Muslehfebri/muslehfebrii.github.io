// components/Nav.js
import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/teams">Teams</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
