import React, {useCallback, useState} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps {
    title: string;
    items: {name: string, href: string}[];
};

const AccordionMenu: React.FC<IProps> = ({ title, items }) => {
    const [open, setOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setOpen(!open);
    }, [open]);


    return (
        <div className={cn(styles.accordionMenu, {
            [styles.open]: open,
        })}>
            <h2 className={styles.title}
                onClick={toggleMenu}
            >
                {title}
                <img className={styles.icon}
                     src={'/icons/icon-arrow-dark.svg'}
                     alt={''}
                />
            </h2>
            <div className={styles.menuWrapper}>
                <ul className={styles.menu}>
                    {items?.map(({name, href}, index) => (
                        <li key={index}>
                            <a href={href}>
                                {name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AccordionMenu;
