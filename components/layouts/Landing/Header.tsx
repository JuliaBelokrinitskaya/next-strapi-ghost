import Link from 'next/link';
import { Button } from 'components/atoms/Button';
import { StyledHeader } from './Header.styled';

type MenuItem = {
  name: string;
  url: string;
};

type Menu = {
  [key: string]: Array<MenuItem>;
};

export default function Header({ locale }: { locale: string }) {
  const menu: Menu = {
    sg: [
      {
        name: 'Osome SG',
        url: '/sg',
      },
      {
        name: 'Osome HK',
        url: '/hk',
      },
      {
        name: 'Osome UK',
        url: '/uk',
      },
    ],
    hk: [
      {
        name: 'Osome HK',
        url: '/hk',
      },
      {
        name: 'Osome SG',
        url: '/sg',
      },
    ],
    uk: [
      {
        name: 'Osome UK',
        url: '/uk',
      },
      {
        name: 'Osome SG',
        url: '/sg',
      },
    ],
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <ul>
          {menu[locale].map((item, id) => {
            return (
              <li key={id} className="header__link">
                <Link href={item.url}>
                  <a>{item.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
        <Button>Hello</Button>
      </nav>
      <style jsx>{StyledHeader}</style>
    </header>
  );
}
