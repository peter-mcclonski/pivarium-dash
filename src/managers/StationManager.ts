import Api from "../api/Api";
import Sensor from "../api/Sensor";
import SensorResult from "../api/SensorResult";
import Station from "../api/Station";

export default class StationManager {
    private api: Api;
    private sensorMap: Map<string, Sensor>;
    private stationMap: Map<string, Station>;

    constructor() {
        this.api = new Api();
        this.sensorMap = new Map<string, Sensor>();
        this.stationMap = new Map<string, Station>();
        this.infinitePoll()
        this.scanForStations()
    }

    async scanForStations() {
        let result = await this.api.getStations()
        for (const station of result) {
            if (!this.stationMap.has(station.uuid)) {
                this.stationMap.set(station.uuid, station)
                let sensors = await this.api.getSensors(station)
                sensors.forEach((sensor) => {
                    station.sensors.set(sensor.uuid, sensor)
                })
            }
        }
        setTimeout(this.scanForStations.bind(this), 3000)
    }

    async infinitePoll() {
        this.sensorMap.forEach(async (value: Sensor, key: string) => {
            let result = await this.api.pollSensor(key);
            //value.setSensorState(result);
        })
        setTimeout(this.infinitePoll.bind(this), 3000)
    }

    getStations() {
        return this.stationMap
    }

    getSensors() {
        return this.sensorMap;
    }
}