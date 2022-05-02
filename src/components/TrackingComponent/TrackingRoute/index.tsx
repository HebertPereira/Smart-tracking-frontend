import React from 'react';
import ScreeningStep from '../../ScreeningStep';

import styles from './TrackingRoute.module.css';

import BackArrowIcon from '../../../assets/icons/backArrowIcon.svg';

interface TrackingRouteProps {
    trackingData: Array<{
        trackingCode: string;
        description: string
        local?: string
    }>;
    setStep: (value: number) => void;
}

const TrackingRoute = ({
    trackingData,
    setStep
}: TrackingRouteProps) => {
    return (
        <div className={styles.tracking_route_content}>
            <section
                className={styles.tracking_route_content_backArrow}
                onClick={() => setStep(0)}
            >
                <BackArrowIcon />
            </section>
            <div className={styles.tracking_route_content_search}>
                {trackingData.map((item, index) => {
                    return (
                        <ScreeningStep
                            data={item}
                            key={index}
                        />
                    );
                })}

            </div>
        </div>
    );
}

export default TrackingRoute;
