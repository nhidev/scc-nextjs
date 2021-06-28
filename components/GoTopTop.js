import React from "react";
import styled from "styled-components";
import Image from 'next/image';

const GoToTopStyled = styled.div`
  transition: transform .4s;
  margin-bottom: 4rem;

  &:hover {
    transform: translate(0,-15px);
  }
  .go-top {
    background: transparent;
    border: none;
    outline: none;
    display: block;
    width: 5rem;
    height: 5rem;
    object-fit: contain;
    cursor: pointer;
    margin: auto;
  }
`

class GoToTop extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      handleAnimation : ''
    };
    this.scrollTop = this.scrollTop.bind(this);
    this.start = this.start.bind(this);
  }
  
  scrollTop(){
    var scrollStep = -window.scrollY / (this.props.time/15);
      if(window.scrollY != 0){
        window.scrollBy(0, scrollStep);
        var id = requestAnimationFrame(this.scrollTop);
        this.setState({handleAnimation: id});
      }else{
        cancelAnimationFrame(this.state.handleAnimation);
      }
  }
  
  start(){
    var id = requestAnimationFrame(this.scrollTop);
    this.setState({handleAnimation: id}); 
  }
  
  render(){
    return(
      <GoToTopStyled>
        <button className="go-top" onClick={this.start}>
          <Image src="/images/go-top-icon.svg" width="50" height="50" alt="go to top" />
        </button>
      </GoToTopStyled>  
      
    );
  }
  
}

export default GoToTop;
