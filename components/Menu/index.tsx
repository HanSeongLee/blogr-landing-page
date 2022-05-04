import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import SitemapContainer from '../../containers/SitemapContainer';
import AccordionMenu from '../AccordionMenu';
import Link from 'next/link';
import cn from 'classnames';

const Menu: React.FC = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setOpen(!open);
    }, [open]);

    return (
        <nav className={styles.nav}>
            <button className={styles.menuButton}
                    type={'button'}
                    onClick={toggleMenu}
            >
                <img src={!open ? '/icons/icon-hamburger.svg' : '/icons/icon-close.svg'}
                     alt={'menu'}
                />
            </button>
            <div className={cn(styles.menuWrapper, {
                [styles.open]: open,
            })}>
                <div className={styles.menu}>
                    <SitemapContainer className={styles.sitemapContainer}
                                      render={(name, children) => (
                                          <AccordionMenu title={name}
                                                         items={children}
                                          />
                                      )}
                    />
                    <hr/>
                    <div className={styles.buttonContainer}>
                        <Link href={'#'}>
                            <a className={styles.loginButton}>
                                Login
                            </a>
                        </Link>
                        <Link href={'#'}>
                            <a className={styles.signupButton}>
                                Sign Up
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Menu;
