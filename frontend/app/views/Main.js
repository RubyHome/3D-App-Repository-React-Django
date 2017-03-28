import React, { Component } from 'react';
import ItemGrid from '../components/common/ItemGrid';

class Main extends Component {

    constructor(props, context){
        super(props, context);
        this.state = {
            products : [{"name":"product1","id": "fadfads"},{"name": "product2", "id" : "fadsf"}],
            flag : 'flag'
        };
    }

    componentDidMount() {
      
       $.ajax({
              url: '/objects',
              method: 'GET',
              cache: false,
              success: function(data) {
                // console.log(data)
                this.setState({
                  // products : data
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
                                {product.name}--{product.id}
                            </div>
                        )}
                   </div> 
          </div>
        )
    }
}

export default Main