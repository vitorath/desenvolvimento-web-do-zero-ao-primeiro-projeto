function Menu(props) {
  return (
    <ul className="menu">
      {props.links.map((link) => (
        <li key={link}>{link}</li>
      ))}
    </ul>
  );
}

export default Menu;