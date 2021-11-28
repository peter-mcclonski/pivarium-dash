import SensorReading from "./SensorReading";
import Station from "./Station";
import Sensor from "./Sensor";

export default class Api {
    private static ax = require('axios');

    static async pollSensor(ident: string): Promise<SensorReading> {
        let result = await Api.ax.get(`/switchstat?ident=${ident}`);
        let data = result.data;
        return Object.assign(new SensorReading(), data);
    }

    static async getSensors(station: Station): Promise<Array<Sensor>> {
        let result = await Api.ax.get(`/sensor/list?ident=${station.uuid}`)
        let data = result.data;
        let sensors = new Array<Sensor>()
        data.forEach((value: any) => {
            sensors.push(Object.assign(new Sensor(), value))
        })
        return sensors
    }

    static async loadRecentReadings(sensor: Sensor): Promise<Sensor> {
        let result = await Api.ax.get(`/sensor/recent?ident=${sensor.uuid}`)
        let readings = new Array<SensorReading>()
        result.data.forEach((value: any) => {
            readings.push(Object.assign(new SensorReading(), value))
        })
        sensor.readings = readings
        return sensor
    }

    static async getStations(): Promise<Array<Station>> {
        let result = await Api.ax.get(`/station/list`);
        let data = result.data;
        let stations = new Array<Station>()
        data.forEach((value: any) => {
            stations.push(Object.assign(new Station(), value))
        })
        console.log(data)
        return stations
    }
}