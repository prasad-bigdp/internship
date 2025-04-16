import { Link } from "react-router-dom"
function Header() {
  return (
    <header className=" bg-gray-700 text-4xl text-center text-white py-10">
      <h1>Movie Library </h1>
      <ul className=" flex text-xl gap-10 justify-center">
        <li><Link to="/" className=" hover:text-blue-700">Home</Link></li>
        <li><Link to="/login" className=" hover:text-blue-700">Login</Link></li>
        <li><Link to="/signup" className=" hover:text-blue-700">Signup</Link></li>
      </ul>
    </header>
  )
}

export default Header
