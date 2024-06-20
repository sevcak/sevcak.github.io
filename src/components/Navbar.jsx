import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <header className="flex flex-row gap-12">
        <NavLink to="/" >
            λ
        </NavLink>
        <nav>
            <NavLink to="/about">about</NavLink>
        </nav>
    </header>
  )
}

export default Navbar