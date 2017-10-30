import React from 'react'
import './HomeView.scss'
import Content from './Content'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'
// import SearchBar from 'react-search-bar'
import IconButton from 'material-ui/IconButton'
import TextField from 'material-ui/TextField'
import Avatar from 'react-avatar'
// import './SearchBar.scss';
import Select from 'react-select';
import './react-select.scss';
import Creatable from 'react-select';


class HomeView extends React.Component {
  constructor(props) {
    super(props)
    this.logChange = this.logChange.bind(this);
    this.state = {fieldValue: '', searchText: '', searched: false, filter: null, animals:[
      { value: 'cat', label: 'Cat' },
      { value: 'dog', label: 'Dog' },
      { value: 'rabbit', label: 'Rabbit'},
      { value: 'bird', label: 'Bird'},
    ]}
  }

  onSearchClick () {
    this.setState({searched: true});

    // update children
    this.setState({searchText: this.state.fieldValue})
  }

  onChange(e) {
  }

  handleSearch(value) {
    if (value) {
      console.info(`Searching "${value}"`);
    }
  }
  handleClear() {
   
  }
  handleChange() {
    
  }
   handleSelection(value) {
    if (value) {
      console.info(`Selected "${value}"`);
    }
  }

  logChange(selections) {
    // if (val == null) this.setState({animal: ''});
    // else { 
    //   console.log('Selected: ', val.value);
    //   this.setState({animal: val});
    // }
    let newAnimals = [].concat(this.state.animals);
    selections.forEach(selection => {
      let match = this.state.animals.find(
        entry => (entry.value == selection.value));
        if (!match) {
          newAnimals.add(match);
        }
    })
    this.setState({
      filter: selections.map(x => x.value),
      animals: newAnimals
    });
     console.log("Selected: ", this.state.filter);
  }

  render () {
    
    let content = <Content ref="child"
                           searchText={this.state.searchText}
                           filter={this.state.filter}/>;

    // let options = [
    //   { value: 'cat', label: 'Cat' },
    //   { value: 'dog', label: 'Dog' },
    //   { value: 'rabbit', label: 'Rabbit'},
    //   { value: 'bird', label: 'Bird'},
    // ];

    return (
      <div className='content-area'>
        <AppBar position='static' className='header'>
          <div className='row'>
            <div className='col-md-6'>
              <Toolbar className='toolBar' onClick={() => this.refs.child.getAlert()}>
                Find Pets For Adoption Nearby
              </Toolbar>
            </div>

           <div className='col-md-3 avatarBar'>
           
            <Select.Creatable 
              name="form-field-name"
              ignoreCase={true}
              value={this.state.filter}
              options={this.state.animals}
              multi={true}
              onChange={this.logChange}
            />
           </div>
          
            <div className='col-md-3'>
              <Toolbar className="avatarBar">
                    <Avatar name="John Smith" size={40} className="avatar" />
                    John Smith
              </Toolbar>
            </div>
          </div>
        </AppBar>

        {content}
      </div>
      )
  }
}

export default HomeView
