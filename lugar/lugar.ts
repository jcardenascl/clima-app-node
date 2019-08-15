import axios from "axios";

export class LatLng {
    constructor() { }
    public async getLugarLatLng(dir: string) {
        const encodeUrl = encodeURI(dir)
        // console.log(encodeUrl);

        const instance = axios.create({
            baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
            headers: {
                'x-rapidapi-key': '1abe16215dmsha0094b1b6788d78p1b3873jsn302fac1f0bfc'
            }
        })

        const resp = await instance.get(`?location=${encodeUrl}`)
        // .then(resp => {
        //     console.log(resp.data.Results[0]);
        // })
        // .catch(err => {
        //     console.log('ERROR!!!', err);
        // })
        if (resp.data.Results.length === 0) {
            throw new Error(`No hay resultados para ${dir}`);

        }

        // console.log(resp.data.Results[0]);


        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;

        return {
            direccion,
            lat,
            lng
        }
    };

}
