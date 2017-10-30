import React from 'react'
import './HomeView.scss'
import SideBar from './Sidebar'
import Swipe from './Swipe'
import Msg from './Msg'

const url = 'https://adogpt.herokuapp.com/get-pet';
const url2 = 'https://adogpt.herokuapp.com/get-match';

class Content extends React.Component {
	constructor(props) {
		super(props)

		// swipe: 0 = message, 1 = profile, 2 = msg
		// view: 0 = swiping, 1 = profile, 2 = list of matches, 3 = msg (not implemented yet)
		// msg: view msgs from index of click callback
		this.state = {
			view: 0,
			msg: -1,
			data: [],
			matchData: [],
		} // currently, we only use msg to determine view

		this.handleClick = this.handleClick.bind(this)
		this.handleSwipe = this.handleSwipe.bind(this)
	}

	componentWillReceiveProps(newProps) {
	}


	// VERY VERY VERY BAD HARDCODE
	fetchPetData() {
		let listOfUrls = [];
		let listOfMatches = [];
		let that = this;

		return Promise.resolve()
		.then(function() {
			return fetch(url)
				.then(res => res.json())
				.then((out) => {
					listOfUrls.push(out);
				})
				.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url2)
			.then(res2 => res2.json())
			.then((out2) => {
			  listOfMatches.push(out2);
			})
			.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url)
				.then(res => res.json())
				.then((out) => {
					listOfUrls.push(out);
				})
				.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url2)
			.then(res2 => res2.json())
			.then((out2) => {
			  listOfMatches.push(out2);
			})
			.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url)
				.then(res => res.json())
				.then((out) => {
					listOfUrls.push(out);
				})
				.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url2)
			.then(res2 => res2.json())
			.then((out2) => {
			  listOfMatches.push(out2);
			})
			.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url)
				.then(res => res.json())
				.then((out) => {
					listOfUrls.push(out);
				})
				.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url2)
			.then(res2 => res2.json())
			.then((out2) => {
			  listOfMatches.push(out2);
			})
			.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url)
				.then(res => res.json())
				.then((out) => {
					listOfUrls.push(out);
				})
				.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url2)
			.then(res2 => res2.json())
			.then((out2) => {
			  listOfMatches.push(out2);
			})
			.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url)
				.then(res => res.json())
				.then((out) => {
					listOfUrls.push(out);
				})
				.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url2)
			.then(res2 => res2.json())
			.then((out2) => {
			  listOfMatches.push(out2);
			})
			.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url)
				.then(res => res.json())
				.then((out) => {
					listOfUrls.push(out);
				})
				.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url2)
			.then(res2 => res2.json())
			.then((out2) => {
			  listOfMatches.push(out2);
			})
			.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url)
				.then(res => res.json())
				.then((out) => {
					listOfUrls.push(out);
				})
				.catch(err => { throw err });
		})
		.then(function() {
			return fetch(url2)
			.then(res2 => res2.json())
			.then((out2) => {
			  listOfMatches.push(out2);
			})
			.catch(err => { throw err });
		})
		.then(function() {
			that.setState({
				data: listOfUrls,
				matchData: listOfMatches,
			});

			console.log(that.state.data);
			console.log(that.state.matchData);
		});
	}

	componentDidMount() {
		this.fetchPetData();
	}

	handleClick(data) {
		// set current viewing id
		this.setState({msg: data})
	}

	handleSwipe(data) {
		if (data === 'end'){
			return;
		}
		else {
			this.state.data.shift(); // clear last pet data
			this.state.matchData.shift();

			if (this.state.data.length === 0){
				this.fetchPetData();
				this.forceUpdate();

				console.log("UPDATED");
			}

			console.log("swiped");
		}
	}

	getAlert() {
		this.setState({msg: -1});
	}
	render () {
		let Content;

		// state var
		if ( this.state.msg !== -1 ) {
			Content = <Msg id = {this.state.msg}/>
		} else {
			Content = <Swipe
						key={this.state.data.length}
						handleSwipe={this.handleSwipe}
						matchData={this.state.matchData}
						data={this.state.data}
						/>
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
