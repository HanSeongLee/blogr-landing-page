import React from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import SitemapContainer from '../../containers/SitemapContainer';
import Link from 'next/link';
import Logo from '../Logo';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.container}>
                <Logo className={styles.logo} />
                <SitemapContainer className={styles.sitemapContainer}
                                  render={(name, children) => (
                                      <>
                                          <h2 className={styles.title}>
                                              {name}
                                          </h2>
                                          <ul className={styles.linkContainer}>
                                              {children?.map(({name, href}, index) => (
                                                  <li key={index}>
                                                      <Link href={href}>
                                                          <a>
                                                              {name}
                                                          </a>
                                                      </Link>
                                                  </li>
                                              ))}
                                          </ul>
                                      </>
                                  )}/>
            </Container>
        </footer>
    );
};

export default Footer;
