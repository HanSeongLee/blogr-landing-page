import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import cn from 'classnames';
import PhonesIllustration from '/public/img/illustration-phones.svg';

const BannerSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <div className={cn(styles.bannerSection, className)}
             {...props}
        >
            <div className={styles.circleWrapper}>
                <img className={styles.circleImage} src={'/img/bg-pattern-circles.svg'}
                     alt={''}
                />
            </div>
            <Container className={styles.container}>
                <div className={styles.imageWrapper}>
                    <PhonesIllustration className={styles.image}/>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        State of the Art Infrastructure
                    </h2>
                    <p className={styles.description}>
                        With reliability and speed in mind, worldwide data centers provide the backbone for
                        ultra-fast
                        connectivity. This ensures your site will load instantly, no matter where your readers are,
                        keeping your site competitive.
                    </p>
                </div>
            </Container>
        </div>
    );
};

export default BannerSection;
