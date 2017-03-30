import React from 'react';
import { Dropdown, Modal} from 'react-bootstrap';
import { smoothlyMenu } from '../layouts/Helpers';
import { Link, Location } from 'react-router';
import MyModal from './MyModal';
import LibraryModal from './LibraryModal';
import SwiperComponent from './SwiperComponent';

class TopHeader extends React.Component {


    constructor(props, context){
        super(props, context);
        this.state = {
            categorys : [],
            products :[]
            };
    }
    
    componentWillMount() {

         $.ajax({
              url: '/categorys',
              method: 'GET',
              cache: false,
              success: function(data) {
                console.log("categorys part")
                console.log(data)
                this.setState({
                  categorys : JSON.parse(data)
                });
              }.bind(this),
              error: function(xhr, status, err) {
                this.setState({
                  message : "something went wrong",
                });
              }.bind(this)
            });

         $.ajax({
              url: '/objects',
              method: 'GET',
              cache: false,
              success: function(data) {
                 console.log(data)
                this.setState({
                  products : JSON.parse(data)
                });
              }.bind(this),
              error: function(xhr, status, err) {
                this.setState({
                  message : "something went wrong",
                });
              }.bind(this)
            });
    }


    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

    render() {
        return (
            <div className="row border-bottom">
                
                <nav className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                    <LibraryModal categorys={this.state.categorys} products={this.state.products} />
                    <MyModal categorys={this.state.categorys} products={this.state.products}/>
                    <ul className="nav navbar-top-links navbar-right">
                        <li>
                            <div className="dropdown profile-element"> <span>
                                <img alt="image" className="img-circle" src="static/img/profile_small.jpg" />
                                 </span>
                            </div>
                        </li>
                        <li>
                           <Link to="/index"><i className="fa fa-sign-out"></i> Log out</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default TopHeader