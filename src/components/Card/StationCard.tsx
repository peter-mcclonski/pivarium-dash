import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import Station from "../../api/Station";
import CardBody from "./CardBody";
import Sensor from "../../api/Sensor";
import Api from "../../api/Api";

interface StationCardProps {
    station: Station
}

interface StationCardState {
    sensors: Array<Sensor>
}

export default class StationCard extends React.Component<StationCardProps, StationCardState> {
    constructor(props: StationCardProps) {
        super(props)
        this.state = {
            sensors: new Array<Sensor>()
        }
    }

    componentDidMount() {
        (async () => {
            let sensors = await Api.getSensors(this.props.station)
            for (const sensor of sensors) {
                await Api.loadRecentReadings(sensor)
            }
            this.setState({
                sensors: sensors
            })
        })()
    }

    render() {
        let station = this.props.station

        let sensorStrings = ""

        for (let sensor of this.state.sensors) {
            sensorStrings += `${sensor.uuid}: ${sensor.stype}`
            console.log(sensor.readings.length)
        }

        return (
            <Card key={station.uuid}>
                <CardHeader color={"warning"}>
                    {station.uuid}
                </CardHeader>
                <CardBody>
                    {sensorStrings}
                </CardBody>
                <CardFooter>
                </CardFooter>
            </Card>
        )
    }
}