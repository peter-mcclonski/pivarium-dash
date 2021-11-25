import SensorResult from "./SensorResult";

export default class Sensor {
    uuid: string
    stype: string
    stationID: string

    constructor() {
        this.uuid = ""
        this.stype = ""
        this.stationID = ""
    }

    getUUID(): string {
        return this.uuid;
    }
}