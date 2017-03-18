import React from 'react';
import './../../../public/js/slick.min.js'
import './../../../public/js/slick_slide.js'
import './../../../public/styles/slick.css'
import './../../../public/styles/slick-theme.css'


class MyCarousel extends React.Component {
    render() {
        return (
            <div className="slick_demo_2">
                <center>
                <div>
                   <img alt="image" className="img-responsive" src="img/1s.jpg"> </img>
                </div>
                <div>
                   <img alt="image" className="img-responsive" src="img/2s.jpg"> </img> 
                </div>
                <div>
                   <img alt="image" className="img-responsive" src="img/3s.jpg"> </img> 
                </div>
                <div>
                   <img alt="image" className="img-responsive" src="img/4s.jpg"> </img>
                </div>
                <div>
                   <img alt="image" className="img-responsive" src="img/5s.jpg"> </img>
                </div>
                </center> 
            </div>
        )
    }
}

export default MyCarousel



