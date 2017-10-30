import React from 'react'
import MatchList from './MatchList'

import Avatar from 'react-avatar'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

class SideBar extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.props.handleClick
	}

	render() {
		return (
				<div>
					<AppBar position='static'>
						<Toolbar>
							<div onClick={() => this.handleClick(-1)}>
							 	<Avatar name="David Zhang" size={40} className="avatar" />
								David Zhang
							</div>
						</Toolbar>
					</AppBar>
					<MatchList handleClick={this.props.handleClick}/>
				</div>
			)
	}

}


export default SideBar
