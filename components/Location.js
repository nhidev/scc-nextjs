import React from "react";
import styled from "styled-components";

const SelectorsStyled = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 30px;
	background: rgba(0, 0, 0, 0.1);
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 1;
`
const SelectorStyled = styled.div`
  border: 1px solid #fff;
  background: none;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  margin: 5px 0;
  opacity: 0.6;
  cursor: pointer;
  transition: background .3s ease-in-out, opacity .3s ease-in-out;
  &:hover,
  &.active {
    background: #fff;
    opacity: 0.9;
  }
	
  &.wrapper {
    width: 100%;
    height: 100%;
    background-size: cover;
    transition: background-image 500ms ease-in-out;
  }
`;
const PanelStyled = styled.aside`
	width: 40rem;
	height: 100%;
	opacity: 0.9;
	color: #fff;
	box-shadow: 5px 0 25px 0 rgba(0, 0, 0, 0.3);
	transition: background 500ms ease-in-out;
  position: absolute;
  right: 0;
	h2.panel-header,
	p.panel-info {
		margin: 0;
		padding: 1.3rem 3.5rem;
	}
	h2.panel-header {
		padding-top: 2em;
		font: {
			weight: normal;
			size: 2.5rem;
		}
		text-transform: capitalize;
	}
	p.panel-info {
		font: {
			size: 1.2rem;
		}
		line-height: 1.8em;
	}
	button.panel-button {
		margin: 1.3rem 3.5rem;
		padding: 0.8em 1.3em;
		background: none;
		border: 1px solid #fff;
		color: #fff;
		cursor: pointer;
		text-transform: uppercase;
		transition: box-shadow 0.5s ease-in-out, color 0.5s ease-in-out;
	
		&:focus {
			outline: none;
		}
	}


  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const LocationStyled = styled.section`
	width: 100%;
	height: 100%;
	background-size: cover;
	transition: background-image 500ms ease-in-out;
  position: relative;
  height: 60rem;
  overflow: hidden;
  margin-bottom: 5rem;
`;

class Location extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeID: 0,
			wrapperStyle: {
				backgroundImage: `url('${this.props.data[0].img}')`
			},
			panelStyle: {
				background: this.props.data[0].colour
			},
			buttonHover: false,
			buttonStyle: {
				color: '#ffffff'
			}
		};
	}
	_changeActive(id) {
		this.setState({
			activeID: id,
			wrapperStyle: {
				backgroundImage: `url('${this.props.data[id].img}')`
			},
			panelStyle: {
				backgroundColor: this.props.data[id].colour
			}
		});
	}
	_buttonColour() {
		if(!this.state.buttonHover){
			this.setState({
				buttonHover: true,
				buttonStyle: {
					color: this.props.data[this.state.activeID].colour
				}
			});
		} else {
			this.setState({
				buttonHover: false,
				buttonStyle: {
					color: '#ffffff'
				}
			});
		}
	}
	render() {
		return (
			<LocationStyled style={this.state.wrapperStyle}>
				<Selectors 
					data={this.props.data}
					activeID={this.state.activeID}
					_changeActive={this._changeActive.bind(this)}
				/>
				<Panel 
					data={this.props.data[this.state.activeID]}
					panelStyle={this.state.panelStyle}
					buttonStyle={this.state.buttonStyle}
					_buttonColour={this._buttonColour.bind(this)}
				/>
			</LocationStyled>
		);
	}
}
export default Location;


class Panel extends React.Component {
	render() {
		return (
			<PanelStyled style={this.props.panelStyle}>
				<h2 className="panel-header">{this.props.data.header}</h2>
				<p className="panel-info">{this.props.data.body}</p>
				<button className="panel-button" 
					style={this.props.buttonStyle}
					onMouseEnter={this.props._buttonColour}
					onMouseLeave={this.props._buttonColour}>
					Read More
				</button>
			</PanelStyled>
		);
	}
}

class Selectors extends React.Component {
	_handleClick(e) {
		if (this.props.id !== this.props.activeID) {
			this.props._changeActive(this.props.id);
		} else {
			return;
		}
	}
	render() {
		return (
			<SelectorsStyled>
				{this.props.data.map((item) => 
					<Selector 
						key={item.id}
						id={item.id}
						_handleClick={this._handleClick}
						_changeActive={this.props._changeActive}
						activeID={this.props.activeID}
					/>
				)}
			</SelectorsStyled>
		);
	}
}

class Selector extends React.Component {
	render() {
		let componentClass = 'selector';
		if (this.props.activeID === this.props.id) {
			componentClass = 'selector active';
		}
		return (
     	<SelectorsStyled className={componentClass} onClick={this.props._handleClick.bind(this)}></SelectorsStyled>
 		);
	}
}



// const data = [{
// 	id: 0,
// 	header: 'Gluten-free Bicycle',
// 	body: 'Chillwave knausgaard chambray flannel tumblr, narwhal microdosing blog...',
// 	colour: '#513B56',
// 	img: 'http://www.calgaryclimbing.com/wp-content/uploads/New-chinook-pano-e1547603708116-1133x850.jpg'
// }, {
// 	id: 1,
// 	header: 'Post-ironic Disrupt',
// 	body: 'Swag biodiesel disrupt retro fashion, salvia food truck kitsch wolf DIY...',
// 	colour: '#1ABC9C',
// 	img: 'http://www.calgaryclimbing.com/wp-content/uploads/spring-classic1-e1568913797455-1133x850.jpg'
// }];