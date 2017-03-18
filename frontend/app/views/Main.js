import React, { Component } from 'react';
import ItemGrid from '../components/common/ItemGrid';

class Main extends Component {

    render() {
        return (
           <div className="wrapper wrapper-content animated fadeInRight">

               {[,...Array(6)].map((x, i) =>
                   <div className="row">
                        {[,...Array(6)].map((x, i) =>
                            <div className="col-md-2">
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