import React from 'react';
import { Link } from 'gatsby';
import { Popover, Menu } from 'antd';
import { useLocation } from '@reach/router';
import classnames from 'classnames/bind';
import { StaticImage } from 'gatsby-plugin-image';
import { FaBars } from 'react-icons/fa';
import * as styles from './index.module.scss';
import menuData from '../../menu';

const cx = classnames.bind(styles);

function Header() {
  const { pathname } = useLocation();
  const imageProps = {
    alt: 'Logo',
    height: 36,
  };

  const isIndex = pathname === '/';

  const NavMenu = (
    <Menu selectedKeys={[pathname]}>
      {menuData.map(({ link, title }) => (
        <Menu.Item key={link}>
          <Link to={link}>{title}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <nav
      className={cx(styles.nav, {
        [styles.navWhiteBackground]: !isIndex,
        [styles.shadow]: !isIndex,
      })}
    >
      {/* TODO: can't use src=`${pathname === '/' ? '../../assets/images/logo-white.png' : '../../assets/images/logo.png'}` */}
      {isIndex ? (
        <StaticImage
          className={styles.logo}
          src="../../assets/images/logo-white.png"
          {...imageProps}
        />
      ) : (
        <StaticImage
          className={styles.logo}
          src="../../assets/images/logo-black.png"
          {...imageProps}
        />
      )}

      <div className={styles.navMenu}>
        {menuData.map(({ link, title }) => (
          <Link
            className={cx(styles.menuItem, {
              [styles.blackMenuItem]: !isIndex,
              [styles.MenuItemActive]: link === (pathname.lastIndexOf('/') > 0 ? pathname.replace(/\/$/, '') : pathname),
            })}
            key={link}
            to={link}
          >
            {title}
          </Link>
        ))}
      </div>
      <Popover content={NavMenu}>
        <FaBars className={styles.bar} color={isIndex ? '#fff' : '#000'} />
      </Popover>
    </nav>
  );
}

export default Header;
