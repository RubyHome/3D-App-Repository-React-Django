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
                        <center><a href="javascript: void(0)" className="product-name">AppName</a></center>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemGrid



