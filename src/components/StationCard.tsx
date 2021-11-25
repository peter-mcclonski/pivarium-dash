import {Component} from "react";
import {Card} from "@mui/material";
import Station from "../api/Station";
import SensorCardGrid from "./SensorCardGrid";

interface StationCardProps {
    lastRefresh: Date
    station: Station
}

interface StationCardState {
}

export default class StationCard extends Component<StationCardProps, StationCardState> {
    constructor(props: StationCardProps) {
        super(props);
    }

    render() {
        return (
            <Card>
                {
                    `${this.props.station.uuid}`
                }
                <SensorCardGrid sensors={this.props.station.sensors} lastRefresh={this.props.lastRefresh} />
            </Card>
        )
    }
}