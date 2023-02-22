import '../css/Help.css';
import helpCard1 from '../images/helpCard.jpg';
import helpCard2 from '../images/helpCard2.jpg';
import helpCard3 from '../images/helpCard3.jpg';

function Help () {
    return(
        <div id='help'>
            <div id='help-header'>
                <span className='help-one'>도움의손길.</span><span className='help-two'>언제든,당신에게 맞는 방식으로.</span>
            </div>
            <div id='card1'>
                <img src={helpCard1}/>
                <a id='text'>APPLE 스페셜리스트</a>
                <a id='text2'>스페셜리스트와 함께하는 일대일 쇼핑. <br/>온라인에서도 매장에서도.</a>
            </div>

            <div id='card2'>
                <img src={helpCard2}/>
                <div><a>무료 개인 맞춤 세션으로 새 기기와 더 <br/>친숙해지세요</a></div>
            </div>

            <div id='card3'>
                <img src={helpCard3}/>
                <div><a>Genius Bar에서 직접 전문가의 도움을 받을 수 있습니다.</a></div>
            </div>
        </div>
    )
}

export default Help;