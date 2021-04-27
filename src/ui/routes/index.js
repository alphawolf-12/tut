import React, {Component} from 'react';
import Card from  '../components/card';
import NavBar from '../components/navBar';
import { pageRoutes } from '../constants';
import { history } from '../setUpUtility';

class HomePage extends Component{
    constructor(){
        super();
    }

    navigateTo = link => {
        history.push(link);
    }

    render(){
        return (
        <div>
            {"HELLO WORLD"}
            {/* <NavBar />
            {pageRoutes.map(ele => {
                <Card name={ele.name} handleClick={ () => {this.navigateTo(ele.link)} } />
            })} */}
        </div>
        )
    }

}


export default HomePage;