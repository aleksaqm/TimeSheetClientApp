interface Props {
  active: string;
  items: { name: string; path: string }[];
  className: string;
}

const NavMenu = ({ items, active, className }: Props) => {
  return (
    <>
      <ul className="menu">
        {items.map(({ name, path }) => (
          <li>
            {name == active ? (
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
