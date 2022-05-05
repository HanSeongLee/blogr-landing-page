import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import Button from '../Button';
import cn from 'classnames';

const HeroSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.heroSection, className)}
                 {...props}
        >
            <Container className={styles.container}>
                <h2 className={styles.title}>
                    A modern publishing platform
                </h2>
                <p className={styles.description}>
                    Grow your audience and build your online brand
                </p>
                <div className={styles.buttonContainer}>
                    <Button>
                        Start for Free
                    </Button>
                    <Button variant={'secondary'}>
                        Learn More
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default HeroSection;
