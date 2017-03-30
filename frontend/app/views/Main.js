import React, { Component } from 'react';
import ItemGrid from '../components/common/ItemGrid';

class Main extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            products : [],
            flag : 'flag'
        };
    }

    componentWillMount() {
        
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


    render() {
        return (
           <div className="wrapper wrapper-content animated fadeInRight">
                   <div className="row">

                        {this.state.products.map((product, index) =>
                            <div className="col-md-2">
                                <ItemGrid key={index + 1} product={product}></ItemGrid>
                            </div>
                        )}
                   </div> 
          </div>
        )
    }
}

export default Main