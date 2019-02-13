import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            term: ''
        }
    }
    onInputChange = (event) =>{
        this.setState({term: event.target.value});
    }
    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render(){
        return (
            <div className="ui action input">
                <form onSubmit={this.onFormSubmit} className="ui action input">
                    <input type="text" 
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
                    <button className="ui teal right labeled icon button">
                        <i className="search icon"></i>
                        Search Videos
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;