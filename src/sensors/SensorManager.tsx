import Api from "../api/Api";
import Sensor from "./Sensor";
import SensorResult from "../api/SensorResult";

export default class SensorManager {
    private api: Api;
    private sensorMap: Map<string, Sensor>;

    constructor() {
        this.api = new Api();
        this.sensorMap = new Map<string, Sensor>();
        this.infinitePoll()
    }

    async infinitePoll() {
        this.sensorMap.forEach(async (value: Sensor, key: string) => {
            let result = await this.api.pollSensor(key);
            value.setSensorState(result);
        })
        setTimeout(this.infinitePoll.bind(this), 3000)
    }

    getSensors() {
        return this.sensorMap;
    }

    registerSensor(sensor: Sensor) {
        this.sensorMap.set(sensor.getIdent(), sensor);
        this.api.pollSensor(sensor.getIdent()).then((content: SensorResult) => {sensor.setSensorState(content)})
    }
}