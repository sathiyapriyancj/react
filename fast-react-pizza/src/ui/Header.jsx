import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-yellow-500">
      <Link to={'/'}>Fast React Pizza</Link>
      <p>Sathiya Priyan</p>
    </header>
  );
}

export default Header;
