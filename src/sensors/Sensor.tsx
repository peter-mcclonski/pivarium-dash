import SensorResult from "../api/SensorResult";

export default class Sensor {
    protected ident: string
    protected sensorStatus: SensorResult

    constructor(ident: string) {
        this.ident = ident;
        this.sensorStatus = new SensorResult();
    }


    getIdent(): string {
        return this.ident;
    }

    getStatus(): SensorResult {
        return this.sensorStatus;
    }
    setSensorState(content: SensorResult): void {
        this.sensorStatus = content;
    }
}