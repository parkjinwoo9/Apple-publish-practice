import "../css/Product.css";
import storeCard1 from "../images/storeCard1.jpg";
import storeCard2 from "../images/storeCard2.jpg";
import storeCard3 from "../images/storeCard3.jpg";
import storeCard4 from "../images/storeCard4.jpg";
import storeCard5 from "../images/storeCard5.jpg";
import { useState } from 'react';


const Product = () => {
  const storeCard = [
    storeCard1,
    storeCard2,
    storeCard3,
    storeCard4,
    storeCard5,
  ];

  const storeCardMap = storeCard.map(
    (data)=>(<div id="img-slide">
        <img src={data}/> 
    </div>)
  )

  const [counter,setCounter] = useState(0);


  const leftBtnClickHandler=()=>{
    setCounter(counter-1)
  }
  const rightBtnClickHandler=()=>{
    setCounter(counter+1)
    
  }
  return (
    <div id="product-slide" >
      <div>
        <span id="new-product">최신제품.</span>
        <span id="warm-story">따끈따끈한신제품 이야기.</span>
      </div>
      <div id="cardMap">
       <button className='left' onClick={leftBtnClickHandler}/>
          <div className='products' >
            <div style={{transform:`translateX(-${27 * counter}%)`}}>
              {storeCardMap}

              <div id='apple-watch'>
                <a className='focus'>BLACK UNITY 밴드</a><br/>
                <a className='tx'>창의성과 공동체 정신. 하나로 엮다.</a><br/>
                <a className='price'>&#8361;65,000</a>
              </div>

              <div id='iphone'>
                <a className='focus-w'>IPHONE 14</a><br/>
                <a className='tx-w'>크게. 더크게.</a><br/>
                <a className='price-w'>&#8361;1,250,000부터</a><br/>
              </div>

              <div id='macbook'>
                <a className='focus'>MACBOOK PRO 14및16</a><br/>
                <a className='tx'>실행의힘.창조의힘.한계를 넘어서는 힘.</a><br/>
                <a className='price'>&#8361;2,790,000부터</a>
              </div>

              <div id='macmini'>
                <a className='focus'>MAC MINI</a><br/>
                <a className='tx'>더 야무지게. 더 빠릿하게.</a><br/>
                <a className='price'>&#8361;850,000부터</a>
              </div>

              <div id='monopoly'>
                <a className='focus-w'>Apple 독점</a><br/>
                <a className='tx-w'>대학 생활용 Mac 또는 iPad를 보다 저렴하게</a><br/>
                <a className='price-w'>교육 할인가로 쇼핑하기.</a><br/>
              </div>

            
            </div>
          </div>
       <button  className='right' onClick={rightBtnClickHandler}/>

      </div>
    </div>
  );
};
export default Product;
