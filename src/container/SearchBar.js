import React from 'react';

class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            term: ''
        }
    }
    render(){
        return (
            <div class="ui action input">
                <form>
                    <input type="text" value="http://ww.short.url/c0opq">
                    <button class="ui teal right labeled icon button">
                        <i class="copy icon"></i>
                        Search Videos
                    </button>
                </form>
            </div>
        );
    }
}