import React, { Component } from 'react';

export default class SingleRun extends Component {
  constructor() {
    super()
    this.state = {
      run: {
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
    }
  }

  render() {
    return (
      <div> Single Run - Will Work on Later</div>
    )   
  }
}