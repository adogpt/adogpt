import React from 'react'
import MatchList from './MatchList'
import './Sidebar.scss'
import Avatar from 'react-avatar'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

class SideBar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			matches: props.matches,
		}
		this.handleClick = this.props.handleClick
	}

	componentWillReceiveProps(nextProp) {
		this.setState({matches: nextProp.matches});
	}

	render() {
		return (
				<div className="matches">
					<AppBar position='static'>
					</AppBar>
					<MatchList handleClick={this.props.handleClick}
							   matches={this.state.matches}/>
				</div>
			)
	}

}


export default SideBar
