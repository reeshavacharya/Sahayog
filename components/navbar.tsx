import Link from "next/link";
import Login from '../components/login'
const Navbar = () => {
  return (
    <nav className="navbar bg-white rounded-b-lg shadow-lg p-4">
      <div className="flex-1">
        <Link href="/" passHref>
          <span className="poppins-thin text-xl text-green-800 cursor-pointer">SAHAYOG 🌱</span>
        </Link>
      </div>
      <div className="flex-none">
        <Login />
      </div>
    </nav>
  );
};

export default Navbar;
