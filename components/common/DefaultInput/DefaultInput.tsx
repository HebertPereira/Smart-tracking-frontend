import React from 'react';
import InputMask from 'react-input-mask';

import styles from './DefaultInput.module.css'

interface DefaultInputProps {
    text: string;
    name: string;
    mask?: string;
}

const DefaultInput = ({
    text,
    name,
    mask
}: DefaultInputProps) => {
    return (
        <div className={styles.defaultInput_container}>
            {mask ?
                <InputMask
                    mask={mask}
                    maskPlaceholder={null}
                >
                    {() => (
                        <input
                            className={styles.defaultInput_input}
                            placeholder={text}
                            name={name}
                        />
                    )}
                </InputMask>
                :
                <input
                    className={styles.defaultInput_input}
                    placeholder={text}
                    name={name}
                />
            }
        </div>
    );
}

export default DefaultInput;
