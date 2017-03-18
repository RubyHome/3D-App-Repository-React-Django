import React from 'react';
import { Dropdown, Modal} from 'react-bootstrap';
import { smoothlyMenu } from '../layouts/Helpers';
import { Link, Location } from 'react-router';
import MyModal from './MyModal';
import LibraryModal from './LibraryModal';
import SwiperComponent from './SwiperComponent';

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
                    <LibraryModal />
                    <MyModal />
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