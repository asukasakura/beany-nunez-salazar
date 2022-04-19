import CartWidget from "./CartWidget"
import HeaderMenu from "./HeaderMenu"

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="flex-none lg:hidden">
          <label for="my-drawer-3" className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div> 
        <a className="btn btn-ghost normal-case text-xl">Beany</a>
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