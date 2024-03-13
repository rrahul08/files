import React from "react";

class Profile extends React.Component{

    constructor(props){
        super(props);

        this.state={
            count:0,
            count2:0, 
        };
    }
    
    render(){
        return(
            <div>
            <h1>Profile class component</h1>
            <h2>Name : {this.props.name}</h2>
            <h2>{this.state.count}</h2>
            <button onClick={()=>{
                this.setState({
                    count:1,
                })
            }}>count</button>
            </div>
        )
    }
}

export default Profile; 