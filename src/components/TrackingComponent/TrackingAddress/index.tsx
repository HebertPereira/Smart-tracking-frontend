import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TrackingDataProps } from '../index';

import { getMyTracking } from '../../../service/tracking';
import MASKS from '../../../utils/masks';

import DefaultButton from '../../common/DefaultButton';
import DefaultInput from '../../common/DefaultInput';

import styles from './TrackingAddress.module.css';

interface TrackingAddressProps {
    setTrackingData: (value: TrackingDataProps) => void;
}

const TrackingAddress = ({ setTrackingData }: TrackingAddressProps) => {
    const formMethods = useForm();
    const { handleSubmit } = formMethods;
    const handleUserSubmit = async (data: TrackingDataProps) => {
        console.log(data);
        setTrackingData(await getMyTracking(data));
    }
    return (
        <div className={styles.tracking_address_content}>
            <h1 className={styles.tracking_address_content_title}>
                Localizar pacote
            </h1>
            <div className={styles.tracking_address_content_search}>
                <form onSubmit={handleSubmit(handleUserSubmit)}>
                    <div>
                        <DefaultInput
                            text="Nome completo"
                            name="name"
                            type="text"
                            formMethods={formMethods}
                        />
                        <div className={styles.tracking_address_content_row}>
                            <DefaultInput
                                text="Código de rastreio"
                                name="tracking_code"
                                type="text"
                                formMethods={formMethods}
                            />
                            <DefaultInput
                                text="CPF"
                                name="cpf"
                                mask={MASKS.cpf}
                                type="text"
                                formMethods={formMethods}
                            />
                        </div>
                        <DefaultInput
                            text="Nº Nota fiscal"
                            name="number_code"
                            type="text"
                            formMethods={formMethods}
                        />
                    </div>
                    <DefaultButton
                        text="Rastrear pacote"
                        type="submit"
                    />
                </form>
            </div>
        </div>
    );
}

export default TrackingAddress;
