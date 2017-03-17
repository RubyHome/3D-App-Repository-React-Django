import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { smoothlyMenu } from '../layouts/Helpers';
import { Link, Location } from 'react-router';

class TopHeader extends React.Component {

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

    render() {
        return (
            <div className="row border-bottom">
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                        
                    <div className="nav navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2" href="#">Object Libraries Menu</a>
                        <a data-toggle="modal" className="navbar-minimalize minimalize-styl-2" href="#modal-form1">Upload Menu</a>

                            <div id="modal-form1" className="modal fade" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-sm-6 b-r"><h3 className="m-t-none m-b">Sign in</h3>
                                                    <p>Sign in today for more expirience.</p>

                                                    <form role="form">
                                                    </form>
                                                </div>
                                                <div className="col-sm-6"><h4>Not a member?</h4>
                                                    <p>You can create an account:</p>
                                                    <p className="text-center">
                                                        <a href=""><i className="fa fa-sign-in big-icon"></i></a>
                                                    </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>








                    </div>    
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <div className="dropdown profile-element"> <span>
                                <img alt="image" className="img-circle" src="img/profile_small.jpg" />
                                 </span>
                            </div>
                        </li>
                        <li>
                           <Link to="/signin"><i className="fa fa-sign-out"></i> Log out</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default TopHeader