import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
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
                        <li className={this.activeRoute("/main")}>
                            <Link to="/main"><i className="fa fa-th-large"></i> <span className="nav-label">Category1</span></Link>
                        </li>
                        <li className={this.activeRoute("/minor")}>
                            <Link to="/minor"><i className="fa fa-th-large"></i> <span className="nav-label">Category2</span></Link>
                        </li>
                        {[,...Array(4)].map((x, i) =>
                            <li>
                                <Link to="/main"><i className="fa fa-th-large"></i> <span className="nav-label">Category{i+2}</span></Link>
                            </li>
                        )}
                    </ul>
            </nav>
        )
    }
}

export default Navigation