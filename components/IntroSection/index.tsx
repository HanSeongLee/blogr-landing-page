import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import Container from '../Container';
import FeatureCard from '../FeatureCard';
import cn from 'classnames';

const IntroSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, ...props }) => {
    return (
        <section className={cn(styles.introSection, className)}
                 {...props}
        >
            <Container>
                <h2 className={styles.title}>
                    Designed for the future
                </h2>
                <img className={styles.image}
                     src={'/img/illustration-editor-mobile-1.svg'}
                     alt={''}
                />
                <div className={styles.featureContainer}>
                    <FeatureCard title={'Introducing an extensible editor'}
                                 description={'Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.'}
                    />
                    <FeatureCard title={'Robust content management'}
                                 description={'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.'}
                    />
                </div>
            </Container>
        </section>
    );
};

export default IntroSection;
