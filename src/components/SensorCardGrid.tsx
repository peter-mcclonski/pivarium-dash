import React from "react";
import Sensor from "../sensors/Sensor";
import {Grid} from "@mui/material";
import SensorCard from "./SensorCard";

interface SensorCardGridProps {
    sensors: Map<string, Sensor>,
    lastRefresh: Date
}

interface SensorCardGridState {}

export default class SensorCardGrid extends React.Component<SensorCardGridProps, SensorCardGridState> {
    constructor(props: SensorCardGridProps) {
        super(props);
        this.state = {
            sensors: new Map<string, Sensor>(),
        }
    }

    render() {
        let sensorCards = new Array<JSX.Element>();
        this.props.sensors.forEach((value: Sensor, key: string) => {
            sensorCards.push(
                <Grid item xs={4} key={key}>
                    <SensorCard sensor={value} lastRefresh={this.props.lastRefresh}/>
                </Grid>
            )
        })
        return (
            <Grid container spacing={2}>
                {sensorCards}
            </Grid>
        );
    }
}