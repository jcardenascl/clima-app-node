"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs = __importStar(require("yargs"));
const lugar_1 = require("./lugar/lugar");
const clima_1 = require("./clima/clima");
const argv = yargs.options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;
const getInfo = (direccion) => __awaiter(this, void 0, void 0, function* () {
    try {
        const coords = new lugar_1.LatLng();
        const newCoords = yield coords.getLugarLatLng(direccion);
        const clima = new clima_1.Clima();
        const newClima = yield clima.getClima(newCoords.lat, newCoords.lng);
        return `El clima de ${newCoords.direccion} es de ${newClima}`;
    }
    catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
});
getInfo(argv.direccion).then((resp) => {
    console.log(resp);
}).catch((err) => {
    console.log(err);
});
