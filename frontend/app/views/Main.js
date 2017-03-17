import React, { Component } from 'react';
import ItemGrid from '../components/common/ItemGrid';

class Main extends Component {

    render() {
        return (
           <div className="wrapper wrapper-content animated fadeInRight">

               {[,...Array(10)].map((x, i) =>
                   <div className="row">
                        {[,...Array(4)].map((x, i) =>
                            <div className="col-md-3">
                                <ItemGrid key={i + 1}></ItemGrid>
                            </div>
                        )}
                   </div>
               )}
        </div>
        )
    }
}

export default Main