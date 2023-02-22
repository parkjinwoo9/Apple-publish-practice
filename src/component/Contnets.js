import '../css/Contents.css';
import React,{useState} from 'react';
import cont2 from '../images/cont2.jpg';
import cont3 from '../images/cont3.png';
import macBook from '../images/macBook.png';
import iPhone from '../images/iPhone.png'
import iPad from '../images/iPad.png'
import appleWatch from '../images/appleWatch.png'
import airPods from '../images/airPods.png';
import airTag from '../images/airTag.png'
import appleTv from '../images/appleTv.png';
import accessory from '../images/accessory.png';


const Contents = () => {
   const productImgList=[
        macBook,
        iPhone,
        iPad,
        appleWatch,
        airPods,
        airTag,
        appleTv,
        accessory
   ]

   const productInfo=[
    "Mac","iPhone",'iPad','AppleWatch','AirPods','AirTag','Apple Tv 4K',
    "액세서리"
   ]
    
    const result=productImgList.map(
        (data)=>(<div id='product-img-list'>
            <img src={data}/>
        </div>)
    )

    const result2=productInfo.map(
        (data)=>(
            <li id='product-list'>{data}</li>
        )
    )

    return(
        <div id="contents">
            <div id="store">
               <span className="store">스토어.</span>
               <span className="store2">좋아하는 Apple 제품을 구입하는 가장 좋은 방법.</span>
           </div>
           <div id="small-cont">
                <div id="support">
                    <img src={cont2}/>
                    <a className="first">쇼핑지원이 필요하다면?</a><br/>
                    <a className="second" href="/">스페셜리스트에게 문의하세요</a>
                </div>
                <div id="visit">
                    <img src={cont3}/>
                    <a className="first">Apple Store를 방문하세요</a><br/>
                    <a className="second" href="/">가까운 매장 찾기</a>
                </div>
           </div>
           <div id="product">
                <div id="product-info">
                    {result}
                </div>
           </div>
           <div>
                {result2}
            </div>
        </div>

    )
}

export default Contents;