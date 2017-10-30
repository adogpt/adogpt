import React from 'react'
import Cards, { Card } from 'react-swipe-card'
import './Swipe.scss'

//const data = ['Alexandre', 'Thomas', 'Lucien']
//data: ['Alexandre', 'Thomas', 'Lucien', '/0'];
class Swipe extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			data: this.props.data,
			matchData: this.props.matchData,
		}

		this.handleSwipe = this.props.handleSwipe
	}

	// componentWillReceiveProps(nextProps){
	// 	if (this.props !== nextProps){
	// 		this.setState({
	// 			data: nextProps.data,
	// 			matchData: nextProps.matchData,
	// 		});
	// 		this.forceUpdate();
	// 		console.log("updated");
	// 	}
	// }

	render() {
		let data = this.state.data;
		let matchData = this.state.matchData;
		//console.log(data);
		//console.log(matchData);

		return (
			<Cards onEnd={this.handleSwipe('end')} className='master-root'>
		        {data.map((item, key) =>
		          <Card
		            key={key}
		            onSwipeLeft={() => this.handleSwipe('left')}
		            onSwipeRight={() => this.handleSwipe('right')}>
		            <h3>{item.species[0]}</h3>
					<img src={item.images[0]} className='image'/>
		          </Card>
		        )}
	      	</Cards>
			)
	}

}


export default Swipe
