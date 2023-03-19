import '../css/Accessory.css';
import accCard1 from '../images/accCard1.jpg'
import accCard2 from '../images/accCard2.jpg'
import accCard3 from '../images/accCard3.jpg'
import accCard4 from '../images/accCard4.jpg'
import accCard5 from '../images/accCard5.jpg'
import {useState} from 'react';


function Accessory () {

    const accCard=[accCard2,accCard3,accCard4,accCard5]

    const result3=accCard.map((data)=>(<div id='acc-map'><img src={data}/></div>))

    const [counter,setCounter] = useState(0);


    const leftBtnClickHandler=()=>{
      setCounter(counter-1)
    }
    const rightBtnClickHandler=()=>{
      setCounter(counter+1)
      
    }
    return(
        <div id='accessory'>
            <div id='acc-header'>
                <span id="acc">액세서리.</span><span id="secacc">특별한 밸런타인데이 선물, 더욱 특별하게 만드는법.</span>
            </div>
            <div id="acc-card" style={{transform:`translateX(-${27 * counter}%)`}}>
                <img src={accCard1}/>
                {result3}
                <div className='acc-info'>
                    <a id='new-wear'>새로움을 입다.</a><br/>
                    <a id='none-prev'>전에 없던 색상으로 찾아온 수많은 액세서리.</a>
                </div>

                <div className='acc-info2'>
                    <a className='first-info'>무료각인</a><br/>
                    <a className='second-info'>AirPods(3세대) MagSafe충전 케이스 모델</a><br/>
                    <a className='acc-price'>&#8361;269,000</a>
                </div>

                <div className='acc-info3'>
                    <a className='first-info'>무료각인</a><br/>
                    <a className='second-info'>Apple Pencil(2세대)</a><br/>
                    <a className='acc-price'>&#8361;195,000</a>
                </div>

                <div className='acc-info4'>
                    <a className='first-info'>무료각인</a><br/>
                    <a className='second-info'>Apple Silcon이 장착된 Mac 모델용 Magic Keyboard</a><br/>
                    <a className='acc-price'>&#8361;229,000</a>
                </div>


            </div>
                <button className='toleft' onClick={leftBtnClickHandler}></button>
                <button className='toright' onClick={rightBtnClickHandler}></button>
        </div>
    )
}

export default Accessory;