import React, { Component } from 'react';
// import SingleRun from './SingleRun';
import convert from 'convert-units';
import logo from './logo.svg';
import './App.css';
import styled, { css } from 'react-emotion';

// const stravaQueryHeaders = process.env.STRAVA_QUERY_HEADERS;

const sampleRun = {
  "id": 1394237509,
  "resource_state": 2,
  "external_id": "garmin_push_2481552282",
  "upload_id": 1504424724,
  "athlete": {
      "id": 20198690,
      "resource_state": 1
  },
  "name": "3.0 miles EC",
  "distance": 4854.3,
  "moving_time": 2260,
  "elapsed_time": 2260,
  "total_elevation_gain": 37.9,
  "type": "Run",
  "start_date": "2018-02-06T12:25:42Z",
  "start_date_local": "2018-02-06T07:25:42Z",
  "timezone": "(GMT-05:00) America/New_York",
  "utc_offset": -18000,
  "start_latlng": [
      40.72,
      -73.77
  ],
  "end_latlng": [
      40.72,
      -73.77
  ],
  "location_city": null,
  "location_state": null,
  "location_country": "United States",
  "start_latitude": 40.72,
  "start_longitude": -73.77,
  "achievement_count": 0,
  "kudos_count": 3,
  "comment_count": 0,
  "athlete_count": 1,
  "photo_count": 0,
  "map": {
      "id": "a1394237509",
      "summary_polyline": "_qpwFfogaM{CmCsED{Ha^_ZfS`H|WuLjFjLmGoFsMw@oH~[gTjB~LlBjBr@dKnGxL",
      "resource_state": 2
  },
  "trainer": false,
  "commute": false,
  "manual": false,
  "private": false,
  "flagged": false,
  "gear_id": null,
  "from_accepted_tag": false,
  "average_speed": 2.148,
  "max_speed": 2.9,
  "has_heartrate": false,
  "elev_high": 50,
  "elev_low": 22.2,
  "pr_count": 0,
  "total_photo_count": 0,
  "has_kudoed": false,
  "workout_type": null
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      runs: {
        week1: {
          monday: 'OFF',
          tuesday: {
            planned: 3.0,
            type: 'EC',
            completed: convert(sampleRun.distance).from('m').to('mi').toFixed(2),
            status() {
              return (this.completed >= this.planned) ? allGood : fail;
            }
          },
          wednesday: 'OFF',
          thursday: {
            planned: 3.5,
            type: 'HM Tempo',
            completed: null,
            status() {
              return this.completed >= this.planned
            }
          },
          friday: 'OFF',
          saturday: 'OFF',
          sunday: {
            planned: 7.0,
            type: 'Easy/LR',
            completed: null,
            status() {
              return this.completed >= this.planned
            }
          }
        },
      }
    }
  }

  componentDidMount(){
    // axios.get('https://www.strava.com/api/v3/athlete/activities', { headers: {'Authorization': stravaQueryHeaders} })
    // .then(res => res.data)
    // .then(data => console.log(data))
  }

  render() {
    let weeks = Object.keys(this.state.runs)
    // let completed = convert(sampleRun.distance).from('m').to('mi').toFixed(2);
    // let status = (completed >= 3.0) ? allGood : fail;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sarah's Training App</h1>
        </header>
        <table>
          <THead>
            <TR className={header}>
              <TD>Monday</TD>
              <TD>Tuesday</TD>
              <TD>Wednesday</TD>
              <TD>Thursday</TD>
              <TD>Friday</TD>
              <TD>Saturday</TD>
              <TD>Sunday</TD>
            </TR>
          </THead>
          <tbody>
            {
              weeks.map(week => {
                let {monday, tuesday, wednesday,thursday,friday,saturday,sunday} = this.state.runs[week];
                return (
                  <TR key={week}>
                    <TD>
                      {
                        typeof monday === 'string' ? 
                        monday :
                        <div>
                          <p>Planned: {monday.planned} {monday.type}</p>
                          {monday.completed && <p className={monday.status()}>Completed: {monday.completed} miles</p> }
                        </div>
                      }
                    </TD>
                    <TD>
                      {
                        typeof tuesday === 'string' ? 
                        tuesday :
                        <div>
                          <p>Planned: {tuesday.planned} {tuesday.type}</p>
                          { tuesday.completed && <p className={tuesday.status()}>Completed: {tuesday.completed} miles</p> }
                        </div>
                      }
                    </TD>
                    <TD>
                      {
                        typeof wednesday === 'string' ? 
                        wednesday :
                        <div>
                          <p>Planned: {wednesday.planned} {wednesday.type}</p>
                          { wednesday.completed && <p className={wednesday.status()}>Completed: {wednesday.completed} miles</p> }
                        </div>
                      }
                    </TD>
                    <TD>
                      {
                        typeof thursday === 'string' ? 
                        thursday :
                        <div>
                          <p>Planned: {thursday.planned} {thursday.type}</p>
                          { thursday.completed && <p className={thursday.status()}>Completed: {thursday.completed} miles</p> }
                        </div>
                      }
                    </TD>
                    <TD>
                      {
                        typeof friday === 'string' ? 
                        friday :
                        <div>
                          <p>Planned: {friday.planned} {friday.type}</p>
                          { friday.completed && <p className={friday.status()}>Completed: {friday.completed} miles</p> }
                        </div>
                      }
                    </TD>
                    <TD>
                      {
                        typeof saturday === 'string' ? 
                        saturday :
                        <div>
                          <p>Planned: {saturday.planned} {saturday.type}</p>
                          { saturday.completed && <p className={saturday.status()}>Completed: {saturday.completed} miles</p> }
                        </div>
                      }
                    </TD>
                    <TD>
                      {
                        typeof sunday === 'string' ? 
                        sunday :
                        <div>
                          <p>Planned: {sunday.planned} {sunday.type}</p>
                          { sunday.completed && <p className={sunday.status()}>Completed: {sunday.completed} miles</p> }
                        </div>
                      }
                    </TD>
                  </TR>
                )
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}



const THead = styled('thead')`
  border: 3px solid black;
`

const header = css`
  color: rebeccapurple;
  font-weight: bold;
`

const TR = styled('tr')`
  border: 1px solid black;
`

const TD = styled('td')`
  border: 1px solid black;
`

const allGood = css`
  color: darkgreen;
  font-weight: bold;
`

const fail = css`
  color: red;
`

export default App;
