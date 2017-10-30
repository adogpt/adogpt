import React from 'react'

import Avatar from 'react-avatar'
import './Msg.scss'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'

import ReactList from 'react-list'


class Msg extends React.Component {
	constructor(props) {
		super(props)
		this.renderItem = this.renderItem.bind(this)
		this.state = {
			fieldValue: '',
			searchText: '',
			conversations: props.conversations,
			id: props.id,
		}

		this.onUpdateMessage = props.onUpdateMessage;
	}
	componentWillReceiveProps(newProps) {
		this.setState({
			id: newProps.id,
			conversations: newProps.conversations,
		});
	}

	onChange(e) {
		this.setState({fieldValue: e.target.value})
	}


	onSendClick () {
		let newMsg = {
			text: this.state.fieldValue,
			pos: 1
		}
		this.onUpdateMessage(newMsg)
		this.setState({fieldValue: ''})
	}

	renderItem(index, key) {
		let message = this.state.conversations[this.state.id].messages[index];
		let pos = message.pos == 0 ? 'left' : 'right';
		return (
			<div key={key} className={pos}>
				<div className='msgBubble'>
				{message.text}
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className='content-area'>
			 	<ReactList itemRenderer={this.renderItem}
			    		   length={this.state.conversations[this.state.id].messages.length}
			    		   type='simple'/>
			 	<form className='form'>
		            <TextField color="primary" 
				               value={this.state.fieldValue} 
				               onChange={this.onChange.bind(this)}/>
            		<Button className='button' 
            				onClick={this.onSendClick.bind(this)}>
              		Send
              		</Button>
          		</form>
			</div>
		)
	}

}


export default Msg