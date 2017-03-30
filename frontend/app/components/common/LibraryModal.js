import React from 'react';
import { Dropdown, Modal, Button , ButtonToolbar ,Carousel } from 'react-bootstrap';
import SwiperComponent from './SwiperComponent';

const LibraryModal = React.createClass({
  getInitialState() {
    return {show: false, categorys : [{'name': 'name'} ]};
  },

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

         // $.ajax({
         //      url: '/objects',
         //      method: 'GET',
         //      cache: false,
         //      success: function(data) {
         //         console.log(data)
         //        this.setState({
         //          products : JSON.parse(data)
         //        });
         //      }.bind(this),
         //      error: function(xhr, status, err) {
         //        this.setState({
         //          message : "something went wrong",
         //        });
         //      }.bind(this)
         //    });
    }, 

  showModal() {
    this.setState({show: true});
  },

  hideModal() {
    this.setState({show: false});
  },

  render() {
    return (
      <ButtonToolbar style={{float : 'left'}}>
        
        <a href="javascript:void(0)" className="navbar-minimalize minimalize-styl-2" onClick={this.showModal}>Object Libraries</a>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.hideModal}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-lg"></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
                <div classNme="col-lg-2" style={{float : 'left'}}>
                  <form role="search" className="navbar-form-custom" action="search_results.html">
                      <input type="checkbox" > <label>Approved</label></input>
                      <div className="form-group">
                          <input type="text" placeholder="Name Editable" className="form-control" name="app_name" id="app_name"></input>
                      </div>
                      <br></br>
                      <div className="form-group">
                          <textarea className="form-control" style={{height : '100'}} placeholder="Description" rows="4" name="app_description" id="app_description"></textarea>
                      </div>
                      <br></br>
                      <div>
                      <select className="form-control" style={{height: '200'}} multiple>
                        <option>category1</option>
                        <option>category2</option>
                        <option>category3</option>
                        <option>category4</option>
                        <option>category5</option>
                        <option>category6</option>
                        <option>category7</option>
                        <option>category8</option>
                      </select>
                      </div>
                  </form>                
                </div>
                <div className="col-lg-9 col-lg-offset-3">
                  <SwiperComponent />
                </div>
              </div>
          </Modal.Body>
        </Modal>
      </ButtonToolbar>
    );
  }
});

export default LibraryModal