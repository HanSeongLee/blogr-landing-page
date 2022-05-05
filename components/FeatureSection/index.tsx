import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import FeatureCard from '../FeatureCard';
import cn from 'classnames';

const FeatureSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.featureSection, className)}
                 {...props}
        >
            <Container>
                <img className={styles.image}
                     src={'/img/illustration-laptop-mobile-1.svg'}
                     alt={''}
                />
                <div className={styles.featureContainer}>
                    <FeatureCard title={'Free, open, simple'}
                                 description={'Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.'}
                    />
                    <FeatureCard title={'Powerful tooling'}
                                 description={'Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.'}
                    />
                </div>
            </Container>
        </section>
    );
};

export default FeatureSection;
