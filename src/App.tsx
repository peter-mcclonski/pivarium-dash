import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Card, Grid} from "@mui/material";

function App() {
  return (
    <div className="App">
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
            <Button>I am a button.</Button>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>Test 2</Card>
        </Grid>
        <Grid item xs={6}>
          <Card>Test 3</Card>
        </Grid>
        <Grid item xs={6}>
          <Card>Test 4</Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
