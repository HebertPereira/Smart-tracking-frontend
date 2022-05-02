import React, { useEffect, useState } from 'react';

import TrackingAddress from './TrackingAddress';
import TrackingRoute from './TrackingRoute';

export interface TrackingDataProps {
    name?: string;
    tracking_code?: string;
    cpf?: number;
    number_code?: number;
}

function TrackingComponent() {
    const [step, setStep] = useState(0);
    const [trackingData, setTrackingData] = useState<TrackingDataProps>({});

    const data = [
        {
            trackingCode: "JT9ASD157",
            description: "Objeto postado"
        },
        {
            trackingCode: "JT9ASD157",
            description: "Objeto em trânsito",
            local: "Betim/MG"
        },
        {
            trackingCode: "JT9ASD157",
            description: "Saiu para entrega ao destinatário",
            local: "CENTRO, BETIM/MG"
        },
        {
            trackingCode: "JT9ASD157",
            description: "Objeto entregue",
        },
    ];

    useEffect(() => {
        console.log(trackingData);
        trackingData?.name ? setStep(1) : setStep(0);
    }, [trackingData])
    const pages = [
        <TrackingAddress key={0} setTrackingData={setTrackingData} />,
        <TrackingRoute
            trackingData={data}
            setStep={setStep}
            key={1}
        />
    ];

    return pages[step];
}

export default TrackingComponent;
