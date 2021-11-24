import React from 'react';
import './App.css';
import SensorManager from "./sensors/SensorManager";
import SensorCardGrid from "./components/SensorCardGrid";
import Sensor from "./sensors/Sensor";

interface AppProps {
}

interface AppState {
  lastRefresh: Date
}

export default class App extends React.Component<AppProps, AppState> {
  private sensorMngr: SensorManager;
  // @ts-ignore
  private interval: Timeout;
  constructor(props: AppProps) {
    super(props);

    this.state = {
      lastRefresh: new Date()
    }

    this.sensorMngr = new SensorManager();
    this.sensorMngr.registerSensor(new Sensor("5"))
    //this.autoRefresh()
  }

  componentDidMount() {
    this.interval = setInterval(() => {this.setState({lastRefresh: new Date()})}, 3000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  async autoRefresh() {
    this.setState({
      lastRefresh: new Date()
    })

    setTimeout(this.autoRefresh.bind(this), 3000);
  }

  render() {
    return <SensorCardGrid sensors={this.sensorMngr.getSensors()} lastRefresh={this.state.lastRefresh} />
  }
}
