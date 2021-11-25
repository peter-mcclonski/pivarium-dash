import Sensor from "./Sensor";

export default class Station {
    uuid: string
    sensors: Map<string, Sensor>

    constructor() {
        this.uuid = ""
        this.sensors = new Map<string, Sensor>()
    }
}