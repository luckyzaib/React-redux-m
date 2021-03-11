import React, { Component } from 'react';
import { connect } from 'react-redux';
import setData from "../store/action/index"
class Home extends Component {
    render() {
        console.log('this.props', this.props)
        return (
            <div>
                <h1>Home</h1>
                <h2>{this.props.users[0].name}</h2>
                <button onClick={()=>this.props.pro()}>SetData</button>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) =>({
pro:()=>dispatch(setData())    
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);