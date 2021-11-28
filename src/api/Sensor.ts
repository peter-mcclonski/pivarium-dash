import SensorReading from "./SensorReading";

export default class Sensor {
    uuid: string
    stype: string
    stationID: string
    readings: Array<SensorReading>

    constructor() {
        this.uuid = ""
        this.stype = ""
        this.stationID = ""
        this.readings = new Array<SensorReading>()
    }

    getUUID(): string {
        return this.uuid;
    }
}