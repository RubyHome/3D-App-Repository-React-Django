import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            categorys : []
        }
    }

    componentWillMount() {
         // $.ajax({
         //      url: '/categorys',
         //      method: 'GET',
         //      cache: false,
         //      success: function(data) {
         //        console.log("categorys part")
         //        console.log(data)
         //        this.setState({
         //          categorys : JSON.parse(data)
         //        });
         //      }.bind(this),
         //      error: function(xhr, status, err) {
         //        this.setState({
         //          message : "something went wrong",
         //        });
         //      }.bind(this)
         //    });
    }

    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                        
                            <form role="search" className="navbar-form-custom" action="search_results.html">
                                <div className="form-group">
                                    <input type="text" placeholder="Search for something..." className="form-control" name="top-search" id="top-search"></input>
                                </div>
                            </form>
                            <br></br>
                            <br></br>
                        </li>
                     
                        {this.state.categorys.map((category, i) =>
                            <li>
                                <Link to="/main/${category}" ><i className="fa fa-th-large"></i> <span className="nav-label">{category.name}</span></Link>
                            </li>
                        )}
                    </ul>
            </nav>
        )
    }
}

export default Navigation