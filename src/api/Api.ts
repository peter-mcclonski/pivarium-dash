import SensorResult from "./SensorResult";
import Station from "./Station";
import Sensor from "./Sensor";

export default class Api {
    private ax;
    constructor() {
        this.ax = require('axios');
    }

    async pollSensor(ident: string): Promise<SensorResult> {
        let result = await this.ax.get(`/switchstat?ident=${ident}`);
        let data = result.data;
        return Object.assign(new SensorResult(), data);
    }

    async getSensors(station: Station): Promise<Array<Sensor>> {
        let result = await this.ax.get(`sensor/list?ident=${station.uuid}`)
        let data = result.data;
        console.log(result)
        let sensors = new Array<Sensor>()
        data.forEach((value: any) => {
            sensors.push(Object.assign(new Sensor(), value))
        })
        return sensors
    }

    async getStations(): Promise<Array<Station>> {
        let result = await this.ax.get(`/station/list`);
        let data = result.data;
        let stations = new Array<Station>()
        data.forEach((value: any) => {
            stations.push(Object.assign(new Station(), value))
        })
        return stations
    }
}