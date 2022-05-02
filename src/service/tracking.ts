import { AxiosResponse } from "axios"
import { toast } from "react-toastify";
import { TrackingDataProps } from "../components/TrackingComponent";
import { api } from "./api"

export const getMyTracking = (data: TrackingDataProps) => {
    // console.log(data)
    return api.get("/tracking", {
        params: {
            cpf: data.cpf,
            code: data.tracking_code,
            numeroNotaFiscal: data.number_code
        }
    })
        .then((response: AxiosResponse) => {
            return response.data;
        })
        .catch((error) => {
            // alert("Error");
            toast.error(error.message);
            return {}
        });
}
