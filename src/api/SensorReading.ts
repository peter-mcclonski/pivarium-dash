export default class SensorReading {
    status: string
    sensor_id: string
    utime: number
    stype: string

    constructor() {
        this.status = ""
        this.sensor_id = ""
        this.utime = -1
        this.stype = ""
    }
}