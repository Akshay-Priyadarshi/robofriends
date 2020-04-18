import React , {Component} from 'react';

class Error extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            hasError : false,
        };
    }

    componentDidCatch(error, info){
        this.setState({ hasError : true })
    }

    render(){
        if(this.state.hasError){
            return <h3>Oops You have an error!</h3>
        }
        else{
            return this.props.children;
        }
    }
}



export default Error;