import React from 'react';
import './App.css';
import StationManager from "./managers/StationManager";
import StationCardGrid from "./components/StationCardGrid";

interface AppProps {
}

interface AppState {
  lastRefresh: Date
}

export default class App extends React.Component<AppProps, AppState> {
  private sensorMngr: StationManager;
  // @ts-ignore
  private interval: Timeout;
  constructor(props: AppProps) {
    super(props);

    this.state = {
      lastRefresh: new Date()
    }

    this.sensorMngr = new StationManager();
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
    return <StationCardGrid stations={this.sensorMngr.getStations()} lastRefresh={this.state.lastRefresh} />
  }
}
