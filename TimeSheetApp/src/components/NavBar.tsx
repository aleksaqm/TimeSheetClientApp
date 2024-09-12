import NavMenu from "./NavMenu";

interface Props {
  active: string;
}

const NavBar = ({ active }: Props) => {
  const items = [
    { name: "TimeSheet", path: "/" },
    { name: "Clients", path: "/clients" },
    { name: "Projects", path: "/" },
    { name: "Categories", path: "/" },
    { name: "Team Members", path: "/" },
    { name: "Reports", path: "/" },
  ];
  return (
    <>
      <nav>
        <NavMenu active={active} className="btn nav" items={items}></NavMenu>
        <div className="mobile-menu">
          <a href="javascript:;" className="menu-btn">
            <i className="zmdi zmdi-menu"></i>
          </a>
          <ul>
            <li>
              <a href="javascript:;">TimeSheet</a>
            </li>
            <li>
              <a href="javascript:;">Clients</a>
            </li>
            <li>
              <a href="javascript:;">Projects</a>
            </li>
            <li>
              <a href="javascript:;">Categories</a>
            </li>
            <li>
              <a href="javascript:;">Team members</a>
            </li>
            <li className="last">
              <a href="javascript:;">Reports</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
