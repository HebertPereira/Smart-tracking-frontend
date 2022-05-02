import React from 'react';

import styles from './DefaultButton.module.css'

interface DefaultButtonProps {
    text: string;
    type: "submit" | "button"
}

const DefaultButton = ({
    text,
    type
}: DefaultButtonProps) => {
    return (
        <button
            className={styles.defaultButton_container}
            type={type}
        >
            {text}
        </button>
    );
}

export default DefaultButton;
