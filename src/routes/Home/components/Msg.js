import React from 'react'

import Avatar from 'react-avatar'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

import ReactList from 'react-list'

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

let messages = [
	{
		text: 'suck ma dick',
		pos: 0
	},
	{
		text: 'no!',
		pos: 1
	},
	{
		text: 'wat the fuk lolz',
		pos: 1
	}
]

class Msg extends React.Component {
	constructor(props) {
		super(props)
		this.renderItem = this.renderItem.bind(this)
		this.state = {fieldValue: '', searchText: '', messages}
	}

	renderItem(index, key) {
		let pos = this.state.messages[index].pos == 0 ? 'left' : 'right'
		return (
			<div key={key} className={pos}>
				<div className='msgBubble'>
				{this.state.messages[index].text}
				</div>
			</div>
		)
	}

	onChange(e) {
    this.setState({fieldValue: e.target.value})
  }


	onSendClick () {
    // update children
    let new_msg = {
    	text: this.state.fieldValue,
    	pos: 1
    }
    messages.push(new_msg)
    this.setState(messages)
    this.setState({fieldValue: ''})
  }

	render() {
		return (
				<div className='content-area'>
					<AppBar position='static'>
						<Toolbar>
							<Avatar name={matches[this.props.id].name} size={40} className="avatar" />
							{matches[this.props.id].name}
						</Toolbar>
					</AppBar>
				 	<ReactList
				    itemRenderer={this.renderItem}
				    length={this.state.messages.length}
				    type='uniform'
				  />
				  <form className='form' >
            <TextField 
            	color="primary" 
              value={this.state.fieldValue} 
              onChange={this.onChange.bind(this)}
            />
            
            <Button 
              color="primary" 
              onClick={this.onSendClick.bind(this)}
            >
              Send
            </Button>
          </form>
				</div>
			)
	}

}


export default Msg