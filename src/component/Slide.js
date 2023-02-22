import '../css/Slide.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Slide = () => {
    const settings={
        dots:false,
        infinite:true,
        speed:500,
        vertical:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:(
            <div id="next">
 
            </div>
        ),
        prevArrow:(
            <div id="prev">
               
            </div>
        )
    }

    return(
        <div id="slide">
            <Slider { ...settings }>
                <div class="slide-p">
                    <div>교육할인가로 Mac 또는 iPad를 보다 저렴하게.**여기에 AirPods까지..**</div>
                </div>
                <div class="slide-p">
                    <div>신용카드 결제 시 최대 12개월 할부 적용 가능.</div>
                </div>
            </Slider>
        </div>
    )
}

export default Slide;