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
      </nav>
    </>
  );
};

export default NavBar;
