import { Link } from 'react-router-dom'
import CartWidget from "./CartWidget"
import HeaderMenu from "./HeaderMenu"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="flex-none lg:hidden">
          <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">Beany</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <HeaderMenu />
        </ul>
      </div>
      <div className="navbar-end">
        <CartWidget />
      </div>
    </div>
  )
}
export default NavBar