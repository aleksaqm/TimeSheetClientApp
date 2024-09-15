import NavMenu from "./NavMenu";

interface Props {
  active: string;
}

const NavBar = ({ active }: Props) => {
  const items = [
    { name: "TimeSheet", path: "/timesheet" },
    { name: "Clients", path: "/clients" },
    { name: "Projects", path: "/projects" },
    { name: "Categories", path: "/categories" },
    { name: "Team Members", path: "/" },
    { name: "Reports", path: "/" },
  ];
  return (
    <>
      <nav>
        <NavMenu active={active} className="btn nav" items={items}></NavMenu>
      </nav>
    </>
  );
};

export default NavBar;
