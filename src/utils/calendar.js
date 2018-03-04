import convert from 'convert-units';
import { css } from 'react-emotion';

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

function mphToMinMi(speed) {
  let divided = (60/speed).toString().split('.');
  let mins = divided[0];
  let secs = (divided[1]*60).toString().slice(0,2);
  return `${mins}:${secs}`
}

const calendar = {};

calendar.week2 = {
  monday: {
    date: '2-5-2018', 
    planned: 'OFF'
  },
  tuesday: {
    date: '2-6-2018',
    planned: 3.0,
    type: 'EC',
    completed: convert(sampleRun.distance).from('m').to('mi').toFixed(2),
    pace: mphToMinMi(convert(sampleRun.average_speed).from('m/s').to('m/h')),
    status() {
      return (this.completed >= this.planned) ? allGood : fail;
    }
  },
  wednesday: {
    date: '2-7-2018', 
    planned: 'OFF'
  },
  thursday: {
    date: '2-8-2018',
    warmup: 1.0,
    warmupCompleted: null,
    planned: 2.0,
    cooldown:0.5,
    cooldownCompleted: null,
    type: 'HM Tempo',
    completed: null,
    warmupStatus() {
      let name;
      if (!this.warmupCompleted) {
        name = plain;
      } else if (this.warmupCompleted >= this.warmup) {
        name = allGood;
      } else {
        name = fail;
      }
      return name;
    },
    cooldownStatus() {
      let name;
      if (!this.cooldownCompleted) {
        name = plain;
      } else if (this.cooldownCompleted >= this.cooldown) {
        name = allGood;
      } else {
        name = fail;
      }
      return name;
    },
    status() {
      return (this.completed >= this.planned) ? allGood : fail;
    }
  },
  friday: {
    date: '2-9-2018',
    planned: 'OFF'
  },
  saturday: {
    date: '2-10-2018',
    planned: 'OFF'
  },
  sunday: {
    date: '2-11-2018',
    planned: 7.0,
    type: 'Easy/LR',
    completed: null,
    status() {
      return this.completed >= this.planned
    }
  }
}

calendar.week3 = {
  monday: {
    date: '2-12-2018', 
    planned: 'OFF'
  },
  tuesday: {
    date: '2-13-2018',
    warmup: 1.0,
    warmupCompleted: null,
    planned: 1.0,
    cooldown: 1.0,
    cooldownCompleted: null,
    type: '10K',
    completed: null,
    warmupStatus() {
      let name;
      if (!this.warmupCompleted) {
        name = plain;
      } else if (this.warmupCompleted >= this.warmup) {
        name = allGood;
      } else {
        name = fail;
      }
      return name;
    },
    cooldownStatus() {
      let name;
      if (!this.cooldownCompleted) {
        name = plain;
      } else if (this.cooldownCompleted >= this.cooldown) {
        name = allGood;
      } else {
        name = fail;
      }
      return name;
    },
    status() {
      return this.completed >= this.planned
    }
  },
  wednesday: {
    date: '2-14-2018',
    planned: 3.3,
    type: 'Easy/LR',
    completed: null,
    status() {
      return this.completed >= this.planned
    }
  },
  thursday: {
    date: '2-15-2018',
    warmup: 0.5,
    warmupCompleted: null,
    planned: 3.0,
    cooldown: 0.5,
    cooldownCompleted: null,
    type: 'HM Tempo',
    completed: null,
    warmupStatus() {
      let name;
      if (!this.warmupCompleted) {
        name = plain;
      } else if (this.warmupCompleted >= this.warmup) {
        name = allGood;
      } else {
        name = fail;
      }
      return name;
    },
    cooldownStatus() {
      let name;
      if (!this.cooldownCompleted) {
        name = plain;
      } else if (this.cooldownCompleted >= this.cooldown) {
        name = allGood;
      } else {
        name = fail;
      }
      return name;
    },
    status() {
      return this.completed >= this.planned
    }
  },
  friday: {
    date: '2-16-2018',
    planned: 'OFF'
  },
  saturday: {
    date: '2-17-2018',
    planned: 'OFF'
  },
  sunday: {
    date: '2-18-2018',
    planned: 10.0,
    type: 'Easy/LR',
    completed: null,
    status() {
      return this.completed >= this.planned
    }
  }
}

export default calendar;

const plain = css`
  color: black;
`

const allGood = css`
  color: darkgreen;
  font-weight: bold;
`

const fail = css`
  color: red;
`

