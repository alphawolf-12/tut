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

    handleLogOut = () => {}

    handleLogIn = () => {}

    render(){
        return (
        <div>
            <NavBar signOut={this.signOut}  />
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {pageRoutes.map(ele => 
                    <Card name={ele.name} 
                      handleClick={ (ev) => { 
                        ev.preventDefault(); this.navigateTo(ele.link)
                    }}
                    />
                )}
            </div>
        </div>
        )
    }

}


export default HomePage;