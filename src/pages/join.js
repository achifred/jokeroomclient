import React, { Component } from 'react';

import ErrorBoundary from '../component/errorBoundary';

import {
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel
} from '@material-ui/core';

import { colors } from '../constant/colors';
import { Data } from '../constant/data';
class Join extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      room: ''
    };
  }
  onchange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  login = event => {
    event.preventDefault();
    const isvalid = this.validate();
    if (isvalid) {
      localStorage.setItem('token', {
        name: this.state.name,
        room: this.state.room
      });
      this.props.history.push(
        `/chat?name=${this.state.name}&room=${this.state.room}`
      );
    }
  };
  validate = () => {
    if (!this.state.name || !this.state.room) {
      return false;
    }
    return true;
  };
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Grid container style={styles.innerContainer}>
            <form style={{ marginTop: 150 }} onSubmit={this.login}>
              <Typography style={styles.introText}>
                The developer joke room
              </Typography>
              <Grid
                container
                style={{
                  justifyContent: 'center',
                  marginTop: 15,
                  marginBottom: 15
                }}
              >
                <TextField
                  placeholder="enter a name"
                  variant="outlined"
                  color="primary"
                  type="text"
                  name="name"
                  fullWidth
                  onChange={this.onchange}
                />
              </Grid>
              <Grid
                container
                style={{
                  justifyContent: 'center',
                  marginTop: 15,
                  marginBottom: 15
                }}
              >
                <InputLabel
                  style={{ color: colors.orange }}
                  htmlFor="age-native-required"
                >
                  select a room to join
                </InputLabel>
              </Grid>
              <Grid
                container
                style={{
                  justifyContent: 'center',
                  marginTop: 15,
                  marginBottom: 15
                }}
              >
                <Select
                  native
                  variant="outlined"
                  name="room"
                  fullWidth
                  onChange={this.onchange}
                  required
                >
                  <option value="" />

                  {Data.map(item => (
                    <option key={item.room} value={item.room}>
                      {item.room}
                    </option>
                  ))}
                </Select>
                <Grid
                  container
                  style={{ justifyContent: 'center', marginTop: 15 }}
                >
                  <Button
                    style={{
                      textAlign: 'center'
                    }}
                    variant="outlined"
                    type="submit"
                  >
                    Join In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </ErrorBoundary>
      </div>
    );
  }
}

const styles = {
  innerContainer: {
    justifyContent: 'center'

    //marginTop: 150
  },
  introText: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: 15,
    color: colors.orange
  }
};
export default Join;
