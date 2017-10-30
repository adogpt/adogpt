import React from 'react'
import './HomeView.scss'
import SideBar from './Sidebar'
import Swipe from './Swipe'
import Msg from './Msg'
import {ModalContainer, ModalDialog} from 'react-modal-dialog';

const url = 'https://adogpt.herokuapp.com/get-pet';
const url2 = 'https://adogpt.herokuapp.com/get-match';


const names = [
	'Charlie',
	'Piper',
	'Faker',
	'Huni',
	'Bang',
	'Wolf',
	'Peanut',
	'Blank',
	'Bengi',
	'Piglet'
]



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
			isShowingModal: false,
			modalData: {},
		} // currently, we only use msg to determine view

		this.handleClick = this.handleClick.bind(this);
		this.handleSwipe = this.handleSwipe.bind(this);
		this.handleClose = () => this.setState({isShowingModal: false});
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
			for (let i = 0; i < listOfUrls.length; i++) {
				listOfUrls[i].name = names[Math.floor(Math.random() * names.length)];
			}

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

	handleSwipe(data, name) {
		name = name || '';
		if (data === 'end'){
			return;
		} else {
			let curr = this.state.data[0];
			console.log(data + name);
			console.log("swiped");
			if (data == 'right') {
				console.log("setting isShowingModal...");
				this.setState({modalData: curr});
				this.setState({isShowingModal: true});
				console.log(this.state.modalData);
			}

			this.state.data.shift(); // clear last pet data

			if (this.state.data.length === 0){
				this.fetchPetData();
				this.forceUpdate();

				console.log("UPDATED");
			}
			
			console.log(this.state.modalData);
		}
	}

	render () {
		let Content;
		let ModalContent;

		// state var
		if ( this.state.msg !== -1 ) {
			Content = <Msg id = {this.state.msg}/>;
		} else {
			Content = <Swipe
						key={this.state.data.length}
						handleSwipe={this.handleSwipe}
						matchData={this.state.matchData}
						data={this.state.data}
						isShowingModal={this.state.isShowingModal}
						/>;
		}

		console.log(this.state.modalData)


		if (this.state.isShowingModal) {
			ModalContent =  (
								<div className="modaler">
									<h1>You've been matched!</h1>
									<img src={this.state.modalData.images[0]}
										 className="image"/>
									<p>You've matched with {this.state.modalData.name}. <br/>We've added them to your match list
									in the sidebar. <br/>Message them any time to let them know you're interested!</p>
								</div>
							)
		}


		return (
		<div>
			<div>
			{
				this.state.isShowingModal &&
		        <ModalContainer onClose={this.handleClose}>
		          <ModalDialog onClose={this.handleClose}>
		            {ModalContent}
		          </ModalDialog>
		        </ModalContainer>
			}
			</div>

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
        </div>
		)
	}
}

export default Content
