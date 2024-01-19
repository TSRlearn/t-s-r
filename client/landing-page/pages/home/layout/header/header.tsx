import Logo from '@shared/components/elements/logo';

import { HeaderNav } from '../../data';

function NavLink() {
  return (
    <nav>
      <ul>
        {HeaderNav.map(({ label, link }) => (
          <li key={label}>
            <a href={link}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Header() {
  return (
    <header>
      <Logo src='/icons/tsr-logo.svg' />
      <NavLink />
      <button type='button'>Enrol Now</button>
    </header>
  );
}