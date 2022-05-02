import React, { ChangeEvent, useState } from "react";
import { get } from 'lodash';
import InputMask from 'react-input-mask';

import { useController } from "react-hook-form";

import styles from './DefaultInput.module.css'

interface DefaultInputProps {
    text: string;
    name: string;
    type: string;
    defaultValue?: string;
    max?: any;
    mask?: string | Array<string>;
    formMethods: any;
    maskChar?: string | undefined | null;

}

const DefaultInput = ({
    text,
    name,
    mask,
    type,
    defaultValue = "",
    max,
    formMethods,
    maskChar = null
}: DefaultInputProps) => {
    const { control, errors } = formMethods;

    const {
        field: {
            onChange,
            onBlur,
            value,
            ...inputProps
        }
    } = useController({
        control,
        name,
        defaultValue
    });

    let errorProps = {};
    const error = get(errors, name);
    if (error) {
        errorProps = {
            error: true,
            helperText: error.message
        };
    }

    return (
        <div className={styles.defaultInput_container} >
            {mask ?
                <InputMask
                    mask={mask}
                    maskPlaceholder={null}
                    {...{
                        onChange,
                        onBlur,
                        value,
                        maskChar
                    }}
                >
                    {() => (
                        <input
                            className={styles.defaultInput_input}
                            type={type}
                            placeholder={text}
                            maxLength={max ? max : undefined}
                            defaultValue={defaultValue}
                            {...inputProps}
                        />
                    )}
                </InputMask>
                :
                <input
                    className={styles.defaultInput_input}
                    placeholder={text}
                    type={type}
                    maxLength={max ? max : undefined}
                    {...{
                        onChange,
                        onBlur,
                        value,
                    }}
                    {...inputProps}
                    {...errorProps}
                />
            }
        </div>
    );
}

export default DefaultInput;
