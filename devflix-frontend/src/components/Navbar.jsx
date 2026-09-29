const Navbar = () => {
  return (
    <nav aria-label="Main Navigation">
      <ul className="stack">
        <li>
          <a href="/" aria-current="page">
            início
          </a>
        </li>
        <li>
          <a href="/services">cursos</a>
        </li>
        <li>
          <a href="/contact">contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
