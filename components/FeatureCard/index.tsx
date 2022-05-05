import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
}

const FeatureCard: React.FC<IProps> = ({ title, description }) => {
    return (
        <div className={styles.featureCard}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <p className={styles.description}>
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;
