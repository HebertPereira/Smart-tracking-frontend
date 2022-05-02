import React from 'react';

import styles from './ScreeningStep.module.css';


import BoxIcon from '../../assets/icons/boxIcon.svg';
import CursorIcon from '../../assets/icons/cursorIcon.svg';
import DeliveredIcon from '../../assets/icons/deliveredIcon.svg';
import DeliveryHomeIcon from '../../assets/icons/deliveryHomeIcon.svg';
import FastDeliveryIcon from '../../assets/icons/fastDeliveryIcon.svg';

interface ScreeningStepProps {
    data: {
        description: string;
        local?: string
        trackingCode: string;
    };
}

const ScreeningStep = ({
    data
}: ScreeningStepProps) => {
    const SwitchIcons = () => {
        switch (data.description) {
            case 'Objeto postado': return <CursorIcon />;
            case 'Objeto em trânsito.': return <FastDeliveryIcon />;
            case 'Saiu para entrega ao destinatário': return <DeliveryHomeIcon />;
            case 'Objeto entregue.': return <DeliveredIcon />;
            default: return <DeliveredIcon />
        }
    }
    return (
        <div className={styles.tracking_route_itemBox}>
            <div className={styles.tracking_route_itemBox_infoRow}>
                <BoxIcon />
                <div className={styles.tracking_route_itemBox_textBox}>
                    <strong>{data.trackingCode}</strong>
                    {data.local ?
                        <span>{data.description} - {data.local}</span>
                        :
                        <span>{data.description}</span>
                    }
                </div>
            </div>
            <div>
                <SwitchIcons />
            </div>
        </div>
    );
}

export default ScreeningStep;