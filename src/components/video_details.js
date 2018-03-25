import React, {Component} from 'react';

class VideoDetails extends Component {
    constructor(props){
        super(props);

        this.state = {term: ''};
    }

    render() {
        return (
            <div>
                <input 
                value={this.state.term}
                onChange={event => this.setState({term: event.target.value})} /> 
            </div>
            )
    }

    onInputChange(event) {
        ;
    }
}

export default VideoDetails;