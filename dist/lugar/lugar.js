"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class LatLng {
    constructor() { }
    getLugarLatLng(dir) {
        return __awaiter(this, void 0, void 0, function* () {
            const encodeUrl = encodeURI(dir);
            // console.log(encodeUrl);
            const instance = axios_1.default.create({
                baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
                headers: {
                    'x-rapidapi-key': '1abe16215dmsha0094b1b6788d78p1b3873jsn302fac1f0bfc'
                }
            });
            const resp = yield instance.get(`?location=${encodeUrl}`);
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
            };
        });
    }
    ;
}
exports.LatLng = LatLng;
