import React from 'react'
import './HomeView.scss'
import Twitter from './twitter/Twitter'
import SideBar from './Sidebar'
import Swipe from './Swipe'
import Msg from './Msg'

class Content extends React.Component {
	constructor(props) {
		super(props)

		// swipe: 0 = message, 1 = profile, 2 = msg
		this.state = {searchText: props.searchText, tweets: '', swipe: 0, msg: -1}
		this.handleClick = this.handleClick.bind(this)
	}

	componentWillReceiveProps(newProps) {
		this.setState({searchText: newProps.searchText})
	}

	handleClick(data) {
		// set current viewing id
		this.setState({msg: data})
	}

	render () {
		let Content;

		// state var
		if ( this.state.msg !== -1 ) {
			Content = <Msg id = {this.state.msg}/>
		} else {
			Content = <Swipe/>
		}
		return (
				<div className='container-fluid content'>
          <div className='row'>
            <div className='col-md-3'>
              <SideBar handleClick={this.handleClick}/>
            </div>
            <div className='col-md-9'>
              {Content}
            </div>
          </div>
        </div>
			)
	}
}

export default Content
