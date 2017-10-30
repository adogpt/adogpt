import React from 'react'
import './HomeView.scss'
import SideBar from './Sidebar'
import Swipe from './Swipe'
import Msg from './Msg'
import {ModalContainer, ModalDialog} from 'react-modal-dialog';
import match from '../assets/itsamatch.png';

const url = 'https://adogpt.herokuapp.com/get-pet';
const url2 = 'https://adogpt.herokuapp.com/get-match';

const catKeywords = ['cat', 'Cat', 'kitten','Kitten'];
const dogKeywords = ['dog', 'Dog',' puppy', 'Puppy'];
const bunnyKeywords = ['bunny','Bunny','rabbit','Rabbit'];
const birdKeywords = ['bird','Bird'];

// Ideally comes from endpoints but too late for that so yolo
const names = [
	'Charlie',
	'Johann',
	'Faker',
	'Huni',
	'Bang',
	'Wolf',
	'Peanut',
	'Blank',
	'Bengi',
	'Piglet',
	'Marin',
	'Hoon',
	'Pooh',
	'Impact',
	'Duke',
	'Gunther',
	'Sprinkles',
	'Derek',
	'Chocolate',
]

// Ideally comes from db access endpoint or stores but yolo
let matches = [
	{
		name: "Chairman Meow",
		id: 0,
	},
	{
		name: "Sgt. Peppers",
		id: 1,
	},
	{
		name: "Llama Del Ray",
		id: 2,
	},
]

// ditto
let conversations = {
	0: {
		messages: [
			{
				text: 'Hello! I\'m interested in adopting Chairman Meow!',
				pos: 1
			},
			{
				text: 'Hi! Do you have any questions in particular?',
				pos: 0
			},
			{
				text: 'How old is he??',
				pos: 1
			},
			{
				text: 'He is 4 years old! Born on the 120th birthday of our great leader.',
				pos: 0
			},
		]
	},
	1: {
		messages: [
			{
				text: 'Hi! How is Sgt Peppers doing after the war?',
				pos: 1
			},
			{
				text: 'Some minor wounds and mild PTSD. He would love to go a loving family!',
				pos: 0
			},
			{
				text: 'How much are veterans paid these days?',
				pos: 1
			},
		]
	},
	2: {
		messages: [
			{
				text: 'Hi! I really love animals. They\'re my favorite things next to humans. My question \
				is, what are her usual habits? Is she well-mannered or playful? How does she handle new situations? \
				How is she with kids? I have 6 brothers and 2 sisters. Will she be okay estranged from her old family?\
				How old is she now? When is the earliest time we can pick her up? Is there some sort of application process\
				or vetting situation? How many more people are interested?',
				pos: 1
			},
			{
				text: 'yup',
				pos: 0
			},
			{
				text: 'Is that a yes to everything???? Please be more clear',
				pos: 1
			},
			{
				text: 'pls respond',
				pos: 1
			},
			{
				text: 'yup',
				pos: 0
			},
		]
	}
}


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
			matches: matches,
			conversations: conversations,
			filter: [],
		} // currently, we only use msg to determine view

		this.handleClick = this.handleClick.bind(this);
		this.handleSwipe = this.handleSwipe.bind(this);
		this.handleClose = () => this.setState({isShowingModal: false});
	}

	filterData(filter) {
		// ES6 magic for filtering
		let data = this.state.data.filter(item =>
			(filter.length == 0) ||
			(new Set(filter).has('cat') && [...new Set(item.species)].filter(x => new Set(catKeywords).has(x)).length > 0) ||
			(new Set(filter).has('dog') && [...new Set(item.species)].filter(x => new Set(dogKeywords).has(x)).length > 0) ||
			(new Set(filter).has('rabbit') && [...new Set(item.species)].filter(x => new Set(bunnyKeywords).has(x)).length > 0) ||
			(new Set(filter).has('bird') && [...new Set(item.species)].filter(x => new Set(birdKeywords).has(x)).length > 0) ||
			([...new Set(filter)].filter(x => new Set(item.species).has(x)).length > 0)
		)
		this.setState({data: data});
	}

	componentWillReceiveProps(newProps) {
		this.setState({filter: newProps.filter});
		let that = this;
		Promise.resolve()
		.then(function() {
			that.filterData(newProps.filter);
		})
		.then(function() {
			if (that.state.data.length === 0){
				that.fetchPetData();
				that.forceUpdate();
			}
		})
		
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
			
			that.filterData(that.state.filter);
			if (that.state.data.length === 0){
				that.fetchPetData();
				that.forceUpdate();
			}

			// console.log(that.state.data);
			// console.log(that.state.matchData);
		});
	}

	componentDidMount() {
		this.fetchPetData();
	}

	handleClick(data) {
		//console.log("clicked:", data);

		// set current viewing id
		this.setState({msg: data})
	}

	handleSwipe(data, name) {
		name = name || '';
		if (data === 'end'){
			return;
		} else {
			let curr = this.state.data[0];
			// console.log("swiped");
			if (data == 'right') {
				// console.log("setting isShowingModal...");
				this.setState({modalData: curr});
				this.setState({isShowingModal: true});


				let matches = this.state.matches.slice();
				let nextId = matches.length;
				matches.push({
					name: name,
					id: nextId,
				});

				this.setState({matches: matches});

				let conversations = this.state.conversations;
				conversations[nextId] = {
					messages: [],
				}
				this.setState({conversations: conversations});

				// console.log(this.state.modalData);
				// console.log(this.state.matches);
				// console.log(this.state.conversations);
			}

			this.state.data.shift(); // clear last pet data

			if (this.state.data.length === 0){
				this.fetchPetData();
				this.forceUpdate();
			}
			
		}
	}

	onUpdateMessage(newMsg) {
		let conversations = this.state.conversations;
		conversations[this.state.id].messages.push(newMsg)
		this.setState({conversations: conversations});
	}

	getAlert() {
		this.setState({msg: -1});
	}

	render () {
		let Content;
		let ModalContent;

		// state var
		if ( this.state.msg !== -1 ) {
			Content = <Msg id={this.state.msg}
						   conversations={this.state.conversations}
						   onUpdateMessage={this.onUpdateMessage}/>;
		} else {
			// i hate sublime

			Content = <Swipe
						key={this.state.data.length}
						handleSwipe={this.handleSwipe}
						matchData={this.state.matchData}
						data={this.state.data}
						isShowingModal={this.state.isShowingModal}
						filter={this.state.filter}
						/>;
		}

		// console.log(this.state)


		if (this.state.isShowingModal) {
			ModalContent =  (
								<div className="modaler">
									<img src={match} className="image2"/>
									<img src={this.state.modalData.images[0]}
										 className="image"/>
									<br/>
									<br/>
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
	              <SideBar handleClick={this.handleClick}
	              		   matches={this.state.matches}/>
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
