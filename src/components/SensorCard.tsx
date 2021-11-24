import {Component} from "react";
import Sensor from "../sensors/Sensor";
import {Card} from "@mui/material";

interface SensorCardProps {
    sensor: Sensor,
    lastRefresh: Date
}

interface SensorCardState {
}

export default class SensorCard extends Component<SensorCardProps, SensorCardState> {
    private sensor: Sensor
    constructor(props: SensorCardProps) {
        super(props);
        this.sensor = props.sensor
    }

    render() {
        return (
            <Card>
                {
                    `${this.sensor.getStatus().id}: ${this.sensor.getStatus().status}`
                }
            </Card>
        )
    }
}