import React from 'react'
import ReactList from 'react-list'
import Avatar from 'react-avatar'
import './MatchList.scss'

const matches = [
	{
		name: "chairman meow"
	}, 
	{
		name: "kitty kat"
	},
	{
		name: "sgt peppers"
	},
	{
		name: "llama del rey"
	},
	{
		name: "snoop dawg"
	},
	{
		name: "steve"
	},
	{
		name: "mr woof"
	},
	{
		name: "roger rabbit"
	}
]

class MatchList extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			clicked: -1
		}
		this.renderItem = this.renderItem.bind(this)
		this.handleClick = this.props.handleClick
	}



	click(ind) {
		this.handleClick(ind);
		this.setState({clicked: ind});
	}

  renderItem(index, key) {
  	let bgColor = (index == this.state.clicked) ? "#FF634D" : "#F7F3E8"
    return (
    		<div key={key} style={{backgroundColor: bgColor, cursor: 'pointer'}} className="messageListItem" onClick={() => this.click(index)}>
    			<Avatar name= {matches[index].name} size={60} className="avatar"/>
    			{matches[index].name}
    		</div>
    	)
  }

	render() {
		return (
				<div>
					<h1 className="matchHeader"> Matches </h1>
					<div className="matchBorder">
					_________________________
					</div>
					<div className="matches">
					  <ReactList
					    itemRenderer={this.renderItem}
					    length={matches.length}
					    type='uniform'
					  />
					</div>
				</div>
			)
	}

}


export default MatchList