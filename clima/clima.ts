import axios from "axios";

export class Clima {

    async getClima(lat: number, lng: number) {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1e23174b195a2db4555f0c6c70a62d45&units=metric`);
        // console.log(resp);

        return resp.data.main.temp;
    }
}