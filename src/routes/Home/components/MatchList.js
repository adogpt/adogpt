import React from 'react'
import ReactList from 'react-list'
import Avatar from 'react-avatar'

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
		this.renderItem = this.renderItem.bind(this)
		this.handleClick = this.props.handleClick
	}

	

  renderItem(index, key) {
    return (
    		<div key={key} className="messageListItem" onClick={() => this.handleClick(index)}>
    			<Avatar name= {matches[index].name} size={60} className="avatar"/>
    			{matches[index].name}
    		</div>
    	)
  }

	render() {
		return (
				<div>
					<h1> Matches </h1>
					<div >
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