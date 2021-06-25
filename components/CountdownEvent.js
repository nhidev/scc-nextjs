import React from "react";
import styled from "styled-components";
import { Grid, Row, Col } from "react-styled-flexboxgrid";
import Link from "next/link";

const CountdownEventStyled = styled.section`
  background: linear-gradient(-25deg, #ff8a8a, #37e3ff);
  color: rgba(255, 255, 255, .6);
  text-align: center;
  max-width: 65rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
 h4 {
   margin-bottom: 1.5rem;
 }
.countdown-holder,
#countdown {
  display: inline-block;
  vertical-align: middle;
  max-width: 50rem;
}

.countdown-row {
  &:after {
    display: inline-block;
    width: 100%;
    height: 0;
    content: '';
  }
}

.countdown__item {
  display: inline-block;
  width: 9rem;
  text-align: center;
  user-select: none;
}

.countdown__item_time {
  position: relative;
  height: 5rem;
  color: rgba(255, 255, 255, .95);
  font-size: 4.8rem;
  
  &:after {
    position: absolute;
    font-size: 3.2rem;
    content: ":";
    right: -0.3rem;
    top: 1rem;
    bottom: 0;
    color: rgba(255, 255, 255, .5);
  }
  
  &:last-child {
    &:after {
      display: none;
    }
  }
}
`;

class CountdownEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.deadline,
      targetDate: undefined,
      itemTitles: [
        ['Day', 'Days', 'Days'],
        ['Hour', 'Hours', 'Hours'],
        ['Minute', 'Minutes', 'Minutes'],
        ['Second', 'Seconds', 'Seconds']
      ],
      timeLeft: []
    };
    this.timeCounter = this.timeCounter.bind(this);
  }
  
  timeCounter () {
    var currentDate = new Date(),
        time = new Date(this.state.date),
        
        diff = Math.round((time - currentDate) / 1000),

        days = Math.floor(diff / (24 * 60 * 60)),
        surplus  = diff - days * (24 * 60 * 60),

        hrs = Math.floor( surplus / (60 * 60)),
        surplus  =  surplus  - hrs * (60 * 60),

        min = Math.floor( surplus / 60),
        sec =  surplus  - min * 60;

        this.setState({
          timeLeft: [
            days,
            hrs,
            min,
            sec
          ]
        });
  }
  
  componentDidMount() {
    this.interval = setInterval(this.timeCounter, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  
  render() { 
    const { 
      date,
      targetDate,
      itemTitles,
      timeLeft,
      
    } = this.state;
    
    let itemsTime = [],
        itemsTitle = [];
    for (let i = 0; i < 4; i++) {
      itemsTime.push(
        <div className='countdown__item countdown__item_time' key={i}>
          {
            timeLeft[i] < 1 ? 
              '00' : 
              timeLeft[i] < 10 ? 
                '0' + timeLeft[i] : 
                timeLeft[i]
          }
        </div>
      );
      
      let a = 0,
          diff = timeLeft[i] - (Math.floor(timeLeft[i] / 10)) * 10;

          diff == 0 || diff > 4 ? 
            a = 2 :
            1 < diff && diff < 5 ? 
              a = 1 : 
              0;
      
          timeLeft[i] >= 10 && timeLeft[i] < 20 ? a = 2 : 0;

      itemsTitle.push(
        <div className='countdown__item countdown__item_title' key={i}> 
          {itemTitles[i][a]}
        </div>
      );
    }
      
    return (
      <CountdownEventStyled>
        <h4>GRAND OPENING COMPETITION 2021</h4>
        <p>COMING SOON / JULY 22-23</p>
        <div className='countdown-holder'>
          <div className='countdown-row'>{itemsTime}</div>
          <div className='countdown-row'>{itemsTitle}</div>
        </div>
      </CountdownEventStyled>
    )
  }
};

export default CountdownEvent;
