import * as yargs from "yargs";
import { LatLng } from './lugar/lugar';
import { Clima } from './clima/clima';
const argv: any = yargs.options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const getInfo = async (direccion: string) => {
    try {
        const coords = new LatLng();
        const newCoords = await coords.getLugarLatLng(direccion);
        const clima = new Clima();
        const newClima = await clima.getClima(newCoords.lat, newCoords.lng)
        return `El clima de ${newCoords.direccion} es de ${newClima}`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}
getInfo(argv.direccion).then((resp) => {
    console.log(resp);
}).catch((err) => {
    console.log(err);
});
