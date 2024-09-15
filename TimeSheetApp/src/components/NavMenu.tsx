interface Props {
  active: string;
  items: { name: string; path: string }[];
  className: string;
}

//link stavi umesto li ovde dole

const NavMenu = ({ items, active, className }: Props) => {
  return (
    <>
      <ul className="menu">
        {items.map(({ name, path }, index) => (
          <li key={index}>
            {name.toLowerCase() === active.toLowerCase() ? (
              <a href={path} className={className + " active"}>
                {name}
              </a>
            ) : (
              <a href={path} className={className}>
                {name}
              </a>
            )}
          </li>
        ))}
      </ul>
      <span className="line"></span>
    </>
  );
};

export default NavMenu;
