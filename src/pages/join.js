import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../component/errorBoundary';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  InputLabel,
  FormControl
} from '@material-ui/core';
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

  handleEmptyInput = event => {
    if (!this.state.name || !this.state.room) {
      return event.preventDefault();
    } else {
      return null;
    }
  };
  render() {
    const { name, room } = this.state;
    return (
      <ErrorBoundary>
        <div>
          <Grid container style={styles.innerContainer}>
            <Typography style={{ textAlign: 'center', marginTop: 15 }}>
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
                placeholder="name"
                variant="outlined"
                type="text"
                name="name"
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
              <FormControl>
                <InputLabel htmlFor="age-native-required">
                  select a joke room
                </InputLabel>
                <Select native name="room" onChange={this.onchange} required>
                  <option value="" />

                  <option value="Developer joke room">
                    Developer's Joke Room
                  </option>
                  <option value="Designer joke room">
                    {' '}
                    Designer's Joke Room
                  </option>
                  <option value=" joke room">Python Joke Room</option>
                  <option value=" joke room">Javascript Joke Room</option>
                </Select>
              </FormControl>
            </Grid>

            <div>
              <Link
                onClick={this.handleEmptyInput}
                to={`/chat?name=${name}&room=${room}`}
                style={{ textDecoration: 'none' }}
              >
                <Button variant="outlined" type="submit">
                  Join In
                </Button>
              </Link>
            </div>
          </Grid>
        </div>
      </ErrorBoundary>
    );
  }
}

const styles = {
  innerContainer: {
    justifyContent: 'center',

    marginTop: 150
  }
};
export default Join;
