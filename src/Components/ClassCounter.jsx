import  { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUserList , buyCake } from './Redux/actionCreators';

class ClassCounter extends Component {
   componentDidMount() {
        this.props.dispatchGetUsers();
   } 

   render() {
    return <div>
        <h3>Cakes - {this.props.cakesCount}</h3>
        <button onClick={this.props.dispatchBuyCake}>Buy Cake</button>
        <br/>
        <div>
            {this.props.error ? 
            (<p style={{color: 'red'}}>Error loading users list</p>) : 
            this.props.users && this.props.users.map(item => {
            return <p key={item.id}>{item.name}</p>
        })}
        </div>
    </div>
   }
}

const mapStateToProps = state => {
    return {
        cakesCount: state.cakes.cakesCount,
        users: state.users.usersList,
        error: state.users.error
    }
}

const mapDispatchToProps = dispatch => {
    return { 
        dispatchBuyCake : () => dispatch(buyCake()),
        dispatchGetUsers: () => dispatch(fetchUserList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassCounter);