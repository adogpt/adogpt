import React from 'react'
import MatchList from './MatchList'

import Avatar from 'react-avatar'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

class SideBar extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
				<div>
					<AppBar position='static'>
						<Toolbar>
							<Avatar name="David Zhang" size={40} className="avatar" />
							David Zhang
						</Toolbar>
					</AppBar>
					<MatchList handleClick={this.props.handleClick}/>
				</div>
			)
	}

}


export default SideBar