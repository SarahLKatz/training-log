import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import styled, { css } from 'react-emotion';
import calendar from '../utils/calendar.js';
import Popup from 'react-popup';

class App extends Component {
  constructor() {
    super()
    this.state = {
      runs: calendar
    }
    this.importData = this.importData.bind(this);
    this.showDay = this.showDay.bind(this);
  }

  importData(e) {
    let vars = e.target.name.split(',')
    let week = vars[0];
    let day = vars[1];
    let today = this.state.runs[week][day].date;
    console.log(today)
  }

  showDay(data) {
    let {date, warmup, warmupCompleted, planned, cooldown, cooldownCompleted, type, completed} = data;
    if (!completed & !warmup) {
      Popup.alert(
        <div>
          <header className="mm-popup__box__header">
            <h1 className="mm-popup__box__header__title">{date} - {type}</h1>
          </header>
          <div className="mm-popup__box__body">
            <p className="plain">{planned} miles planned</p>
          </div>
        </div>
      );
    } else if (!completed) {
      Popup.alert(
        <div>
          <header className="mm-popup__box__header">
            <h1 className="mm-popup__box__header__title">{date} - {type}</h1>
          </header>
          <div className="mm-popup__box__body">
            <p className="plain">Warm Up: {warmup} miles planned</p>
            <p className="plain">{type}: {planned} miles planned</p>
            <p className="plain">Cool Down: {cooldown} miles planned</p>
          </div>
        </div>
      );
    } else if (warmup) {
      Popup.alert(
        <div>
          <header className="mm-popup__box__header">
            <h1 className="mm-popup__box__header__title">{date} - {type}</h1>
          </header>
          <div className="mm-popup__box__body">
            <p className={data.warmupStatus()}>Warm Up: {warmup} miles planned ~ {warmupCompleted} miles completed</p>
            <p className={data.status()}>{type}: {planned} miles planned ~ {completed} miles completed</p>
            <p className={data.cooldownStatus()}>Cool Down: {cooldown} miles planned ~ {cooldownCompleted} miles completed</p>
          </div>
        </div>
      );
    } else {
      Popup.alert(
        <div>
          <header className="mm-popup__box__header">
            <h1 className="mm-popup__box__header__title">{date} - {type}</h1>
          </header>
          <div className="mm-popup__box__body">
            <p className={data.status()}>{planned} miles planned ~ {completed} miles completed</p>
          </div>
        </div>
      );
    }
  }

  render() {
    let weeks = Object.keys(this.state.runs)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Sarah's Training App</h1>
        </header>
        <table>
          <thead>
            <TR className={header}>
              <TD>Monday</TD>
              <TD>Tuesday</TD>
              <TD>Wednesday</TD>
              <TD>Thursday</TD>
              <TD>Friday</TD>
              <TD>Saturday</TD>
              <TD>Sunday</TD>
            </TR>
          </thead>
          <tbody>
            {
              weeks.map(week => {
                let {monday, tuesday, wednesday,thursday,friday,saturday,sunday} = this.state.runs[week];
                return (
                  <TR key={week}>
                    <TD>
                      {
                        (monday.planned === 'OFF') ? 
                        <div>
                          <p>{monday.date}</p>
                          <p> { monday.planned } </p>
                        </div>
                        :
                        <div>
                          <a className={bold} onClick={() => this.showDay(monday)}>{monday.date}</a>
                          { monday.warmup && <p className={monday.warmupStatus()}>Warm Up: {monday.warmup} Easy/LR</p>}
                          <p>Planned: {monday.planned} {monday.type}</p>
                          { monday.cooldown && <p className={monday.cooldownStatus()}>Cool Down: {monday.cooldown} Easy/LR</p>}
                          { (monday.completed) ? 
                            <p className={monday.status()}>Completed: {monday.completed} miles</p> 
                            :
                            <button onClick={this.importData} name={`${week},monday`}>Import Run(s)</button>
                          }
                        </div>
                      }
                    </TD>
                    <TD>
                      {
                        (tuesday.planned === 'OFF') ? 
                        <div>
                          <p className={bold}>{tuesday.date}</p>
                          <p> { tuesday.planned } </p>
                        </div>
                        :
                        <div>
                          <a className={bold} onClick={() => this.showDay(tuesday)}>{tuesday.date}</a>
                          { tuesday.warmup && <p className={tuesday.warmupStatus()}>Warm Up: {tuesday.warmup} Easy/LR</p>}
                          <p>Planned: {tuesday.planned} {tuesday.type}</p>
                          { tuesday.cooldown && <p className={tuesday.cooldownStatus()}>Cool Down: {tuesday.cooldown} Easy/LR</p>}
                          { (tuesday.completed) ? 
                            <p className={tuesday.status()}>Completed: {tuesday.completed} miles</p> 
                            :
                            <button onClick={this.importData} name={`${week},tuesday`}>Import Run(s)</button>
                          }
                        </div>
                      }
                    </TD>
                    <TD>
                      {
                        (wednesday.planned === 'OFF') ? 
                        <div>
                          <p className={bold}>{wednesday.date}</p>
                          <p> { wednesday.planned } </p>
                        </div> 
                        :
                        <div>
                          <a className={bold} onClick={() => this.showDay(wednesday)}>{wednesday.date}</a>
                          { wednesday.warmup && <p className={wednesday.warmupStatus()}>Warm Up: {wednesday.warmup} Easy/LR</p>}
                          <p>Planned: {wednesday.planned} {wednesday.type}</p>
                          { wednesday.cooldown && <p className={wednesday.cooldownStatus()}>Cool Down: {wednesday.cooldown} Easy/LR</p>}
                          { (wednesday.completed) ? 
                            <p className={wednesday.status()}>Completed: {wednesday.completed} miles</p> 
                            :
                            <button onClick={this.importData} name={`${week},wednesday`}>Import Run(s)</button>
                          }
                        </div>
                      }
                    </TD>
                    <TD>
                      {
                        (thursday.planned === 'OFF') ? 
                        <div>
                          <p className={bold}>{thursday.date}</p>
                          <p> { thursday.planned } </p>
                        </div>
                        :
                        <div>
                          <a className={bold} onClick={() => this.showDay(thursday)}>{thursday.date}</a>
                          { thursday.warmup && <p className={thursday.warmupStatus()}>Warm Up: {thursday.warmup} Easy/LR</p>}
                          <p>Planned: {thursday.planned} {thursday.type}</p>
                          { thursday.cooldown && <p className={thursday.cooldownStatus()}>Cool Down: {thursday.cooldown} Easy/LR</p>}
                          { (thursday.completed) ? 
                            <p className={thursday.status()}>Completed: {thursday.completed} miles</p> 
                            :
                            <button onClick={this.importData} name={`${week},thursday`}>Import Run(s)</button>
                          }
                        </div>
                      }
                    </TD>
                    <TD>
                      {
                        (friday.planned === 'OFF') ? 
                        <div>
                          <p className={bold}>{friday.date}</p>
                          <p> { friday.planned } </p>
                        </div>
                        :
                        <div>
                          <a className={bold} onClick={() => this.showDay(friday)}>{friday.date}</a>
                          { friday.warmup && <p className={friday.warmupStatus()}>Warm Up: {friday.warmup} Easy/LR</p>}
                          <p>Planned: {friday.planned} {friday.type}</p>
                          { friday.cooldown && <p className={friday.cooldownStatus()}>Cool Down: {friday.cooldown} Easy/LR</p>}
                          { (friday.completed) ? 
                            <p className={friday.status()}>Completed: {friday.completed} miles</p> 
                            :
                            <button onClick={this.importData} name={`${week},friday`}>Import Run(s)</button>
                          }
                        </div>
                      }
                    </TD>
                    <TD>
                      {
                        (saturday.planned === 'OFF') ? 
                        <div>
                          <p className={bold}>{saturday.date}</p>
                          <p> { saturday.planned } </p>
                        </div>
                        :
                        <div>
                          <a className={bold} onClick={() => this.showDay(saturday)}>{saturday.date}</a>
                          { saturday.warmup && <p className={saturday.warmupStatus()}>Warm Up: {saturday.warmup} Easy/LR</p>}
                          <p>Planned: {saturday.planned} {saturday.type}</p>
                          { saturday.cooldown && <p className={saturday.cooldownStatus()}>Cool Down: {saturday.cooldown} Easy/LR</p>}
                          { (saturday.completed) ? 
                            <p className={saturday.status()}>Completed: {saturday.completed} miles</p> 
                            :
                            <button onClick={this.importData} name={`${week},saturday`}>Import Run(s)</button>
                          }
                        </div>
                      }
                    </TD>
                    <TD>
                      {
                        (sunday.planned === 'OFF') ? 
                        <div>
                          <p className={bold}>{sunday.date}</p>
                          <p> { sunday.planned } </p>
                        </div>
                        :
                        <div>
                          <a className={bold} onClick={() => this.showDay(sunday)}>{sunday.date}</a>
                          { sunday.warmup && <p className={sunday.warmupStatus()}>Warm Up: {sunday.warmup} Easy/LR</p>}
                          <p>Planned: {sunday.planned} {sunday.type}</p>
                          { sunday.cooldown && <p className={sunday.cooldownStatus()}>Cool Down: {sunday.cooldown} Easy/LR</p>}
                          { (sunday.completed) ? 
                            <p className={sunday.status()}>Completed: {sunday.completed} miles</p> 
                            :
                            <button onClick={this.importData} name={`${week},sunday`}>Import Run(s)</button>
                          }
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


const header = css`
  color: rebeccapurple;
  font-weight: bold;
`

const TR = styled('tr')`
  border: 1px solid black;
`

const TD = styled('td')`
  border: 1px solid black;
  padding: 1vw;
`

const bold = css`
  color: indianred;
  font-weight: bold;
`

export default App;
