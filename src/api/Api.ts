import SensorResult from "./SensorResult";

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
}