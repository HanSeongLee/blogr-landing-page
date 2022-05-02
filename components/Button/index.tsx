import React, {HTMLAttributes} from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IProps extends HTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<IProps> = ({ variant, className, children, ...props }) => {
    return (
        <button className={cn(styles.button, className, {
            [styles.primary]: variant === 'primary',
            [styles.secondary]: variant === 'secondary',
        })}
                {...props}
        >
            {children}
        </button>
    );
};

Button.defaultProps = {
    variant: 'primary',
};

export default Button;
