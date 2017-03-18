import React from 'react';
import './../../../public/js/swiper.min.js'
import './../../../public/styles/swiper.min.css'
import './../../../public/styles/swiper_component.css'

class SwiperComponent extends React.Component {

    componentDidMount() {
        var galleryTop = new Swiper('.gallery-top', 
                        { nextButton: '.swiper-button-next',
                         prevButton: '.swiper-button-prev',spaceBetween: 10,}); var galleryThumbs = new Swiper('.gallery-thumbs', {spaceBetween: 10,centeredSlides: true, slidesPerView: 'auto', touchRatio: 0.2,slideToClickedSlide: true }); galleryTop.params.control = galleryThumbs; galleryThumbs.params.control = galleryTop;
    } 

    render() {
        return (
            <div>
                <div className="swiper-container gallery-top">
                    <div className="swiper-wrapper">
                     <img alt="image" className="swiper-slide" src="img/p1.jpg"> </img>
                     <img alt="image" className="swiper-slide" src="img/p2.jpg"> </img>
                     <img alt="image" className="swiper-slide" src="img/p3.jpg"> </img>
                     <img alt="image" className="swiper-slide" src="img/p4.jpg"> </img>
                     <img alt="image" className="swiper-slide" src="img/p5.jpg"> </img>
                     <img alt="image" className="swiper-slide" src="img/p6.jpg"> </img>
                     <img alt="image" className="swiper-slide" src="img/p7.jpg"> </img>
                    </div>
                    <div className="swiper-button-next swiper-button-white"></div>
                    <div className="swiper-button-prev swiper-button-white"></div>
                </div>
                <div className="swiper-container gallery-thumbs">
                    <div className="swiper-wrapper">
                     <img alt="image" className="swiper-slide" src="img/p1.jpg"> </img>
                     <img alt="image" className="swiper-slide" src="img/p2.jpg"> </img>
                     <img alt="image" className="swiper-slide" src="img/p3.jpg"> </img>
                     <img alt="image" className="swiper-slide" src="img/p4.jpg"> </img>
                     <img alt="image" className="swiper-slide" src="img/p5.jpg"> </img>
                     <img alt="image" className="swiper-slide" src="img/p6.jpg"> </img>
                     <img alt="image" className="swiper-slide" src="img/p7.jpg"> </img>
                    </div>
                </div>
            </div>
        )
    }
}

export default SwiperComponent



