import React from 'react';

class ItemGrid extends React.Component {
    render() {
        return (
            <div className="ibox">
                <div className="ibox-content product-box">
                    <div className="product-imitation">
                        [ 3D App ]
                    </div>
                    <div className="product-desc">
                        <span className="product-price">
                            $10
                        </span>
                        <small className="text-muted"></small>
                        <a href="#" className="product-name"></a>
                        <div className="small m-t-xs">
                        </div>
                        <div className="ibox-content">
                            <div className="text-center">
                                <a data-toggle="modal" className="btn btn-xs btn-outline btn-primary" href="#modal-form">More Detail</a>
                            </div>
                            <div id="modal-form" className="modal fade" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <div className="row">
                                                <div className="col-lg-8">
                                                    <div className="ibox float-e-margins">
                                                        
                                                        <div className="ibox-content">
                                                            <div className="carousel slide" id="carousel1">
                                                                <div className="carousel-inner">
                                                                    <div className="item active">
                                                                        <img alt="image" className="img-responsive" src="img/p_big3.jpg"> </img>
                                                                    </div>
                                                                    <div className="item">
                                                                        <img alt="image"  className="img-responsive" src="img/p_big1.jpg"> </img>
                                                                    </div>
                                                                    <div className="item ">
                                                                        <img alt="image" className="img-responsive" src="img/p_big2.jpg"> </img>
                                                                    </div>

                                                                </div>
                                                                <a data-slide="prev" href="#carousel1" className="left carousel-control">
                                                                    <span className="icon-prev"></span>
                                                                </a>
                                                                <a data-slide="next" href="#carousel1" className="right carousel-control">
                                                                    <span className="icon-next"></span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
            
                                                <div className="col-sm-4"><h4>Not a member?</h4>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemGrid



