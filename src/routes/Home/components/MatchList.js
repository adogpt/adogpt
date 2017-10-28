import React from 'react'
import ReactList from 'react-list'
import Avatar from 'react-avatar'

const matches = [
	{
		name: "meow"
	}, 
	{
		name: "kitty"
	},
	{
		name: "fat"
	},
	{
		name: "cat"
	},
	{
		name: "dawg"
	},
	{
		name: "weeb"
	},
	{
		name: "nerd"
	},
	{
		name: "fuckboi"
	}
]

class MatchList extends React.Component {

  

	constructor(props) {
		super(props)
		
	}

  renderItem(index, key) {
    return (
    		<div key={key} className="messageListItem">
    			<Avatar name= {matches[index].name} size={60} className="avatar" />
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