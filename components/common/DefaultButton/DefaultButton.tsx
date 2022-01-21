import React from 'react';

import styles from './DefaultButton.module.css'

interface DefaultButtonProps {
    text: string;
}

const DefaultButton = ({
    text
}: DefaultButtonProps) => {
    return (
        <button
            className={styles.defaultButton_container}
        >
            {text}
        </button>
    );
}

export default DefaultButton;
