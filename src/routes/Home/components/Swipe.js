import React from 'react'
import Cards, { Card } from 'react-swipe-card'
import './Swipe.scss'


class Swipe extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			data: this.props.data,
			matchData: this.props.matchData,
			filter: '',
		}

		this.handleSwipe = this.props.handleSwipe
	}

	componentWillReceiveProps(nextProps){
		this.setState({
			filter: nextProps.filter,
			data: nextProps.data,
		});
	}

	render() {
		
		// let matchData = this.state.matchData;
		// console.log(matchData);

		return (
			<Cards onEnd={this.handleSwipe('end')} className='master-root'>
		        {this.state.data.map((item, key) =>
		          <Card
		            key={key}
		            onSwipeLeft={() => this.handleSwipe('left')}
		            onSwipeRight={() => this.handleSwipe('right', item.name)}>
		            <h3>{item.name}</h3>
					<img src={item.images[0]} className='image'/>
		          </Card>
		        )}
	      	</Cards>
			)
	}

}


export default Swipe
