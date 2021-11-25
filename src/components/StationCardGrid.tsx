import React from "react";
import {Grid} from "@mui/material";
import StationCard from "./StationCard"
import Station from "../api/Station";

interface StationCardGridProps {
    stations: Map<string, Station>,
    lastRefresh: Date
}

interface StationCardGridState {}

export default class StationCardGrid extends React.Component<StationCardGridProps, StationCardGridState> {
    constructor(props: StationCardGridProps) {
        super(props);
        this.state = {
            sensors: new Map<string, Station>(),
        }
    }

    render() {
        let sensorCards = new Array<JSX.Element>();
        this.props.stations.forEach((value: Station, key: string) => {
            sensorCards.push(
                <Grid item xs={6} key={key}>
                    <StationCard station={value} lastRefresh={this.props.lastRefresh}/>
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