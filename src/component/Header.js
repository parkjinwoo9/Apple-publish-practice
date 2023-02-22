import '../css/Header.css'
import logo from '../images/appleLogo.png';
import $ from 'jquery';
import {useEffect} from 'react';


function Header (){


    useEffect(()=>{
        $('#menu-box>li').on({
            "mouseover":function(){
                var idx=$(this).index()
                console.log(idx)
                $('#menu-box>li').eq(idx).find('.lnb-wrap').show()
            },
            "mouseout":function(){
                $('#menu-box>li').find('.lnb-wrap').hide()
            }
        })
    },[])

    return(

        <div id="header">
            <ul id='menu'>
                <img src={logo} alt="logo"/>
                <div id="menu-box">
                    <li>
                        <a href="/">스토어</a>
                        <div className='lnb-wrap'>
                            <div className='left-lab'>
                                <span className='lnb-span'>쇼핑하기</span><br/>
                                <li>
                                    <a>최신제품쇼핑하기</a>
                                </li>
                                <li>
                                    <a>Mac</a>
                                </li>
                                <li>
                                    <a>iPad</a>
                                </li>
                                <li>
                                    <a>iPhone</a>
                                </li>
                                <li>
                                    <a>Apple Watch</a>
                                </li>
                                <li>
                                    <a>액세서리</a>
                                </li>
                            </div>
                            <div className='center-lab'>
                                <span className='lnb-span'>Mac 쇼핑하기</span>
                                <li>
                                    <a>Mac 쇼핑하기</a>
                                </li>
                                <li>
                                    <a>Mac 액세서리</a>
                                </li>
                                <li>
                                    <a>금융 혜택</a>
                                </li>
                                <li>
                                    <a>Apple Trade In</a>
                                </li>
                            </div>
                            <div className='right-lab'>
                                <span className='lnb-span'>특별할인 쇼핑하기</span>
                                <li>
                                    <a>인증 리퍼버쉬 제품</a>
                                </li>
                                <li>
                                    <a>교육</a>
                                </li>
                                <li>
                                    <a>비지니스</a>
                                </li>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/">Mac</a>
                        <div className='lnb-wrap'>
                            <div className='left-lab'>
                                <span className='lnb-span'>Mac 살펴보기</span><br/>
                                <li>
                                    <a>MacBook Air</a>
                                </li>
                                <li>
                                    <a>MacBook Pro</a>
                                </li>
                                <li>
                                    <a>iMac</a>
                                </li>
                                <li>
                                    <a>Mac Mini</a>
                                </li>
                                <li>
                                    <a>Mac Studio</a>
                                </li>
                                <li>
                                    <a>Mac Pro</a>
                                </li>
                            </div>
                            <div className='center-lab'>
                                <span className='lnb-span'>Mac 쇼핑하기</span>
                                <li>
                                    <a>Mac 쇼핑하기</a>
                                </li>
                                <li>
                                    <a>Mac 액세서리</a>
                                </li>
                                <li>
                                    <a>금융 혜택</a>
                                </li>
                                <li>
                                    <a>Apple Trade In</a>
                                </li>
                            </div>
                            <div className='right-lab'>
                                <span className='lnb-span'>그 외 Mac 관련항목</span>
                                <li>
                                    <a>Mac 지원</a>
                                </li>
                                <li>
                                    <a>Mac Os Ventura</a>
                                </li>
                                <li>
                                    <a>연속성</a>
                                </li>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <a href="/">ipad</a>
                        <div className='lnb-wrap'>
                            <div className='left-lab'>
                                <span className='lnb-span'>iPad 살펴보기</span><br/>
                                <li>
                                    <a>iPad Pro</a>
                                </li>
                                <li>
                                    <a>iPad Air</a>
                                </li>
                                <li>
                                    <a>iPad</a>
                                </li>
                                <li>
                                    <a>iPad Mini</a>
                                </li>
                                <li>
                                    <a>Apple Pencil</a>
                                </li>
                                <li>
                                    <a>키보드</a>
                                </li>
                            </div>
                            <div className='center-lab'>
                                <span className='lnb-span'>iPad 살펴보기</span>
                                <li>
                                    <a>iPad 쇼핑하기</a>
                                </li>
                                <li>
                                    <a>iPad 액세서리</a>
                                </li>
                                <li>
                                    <a>금융 혜택</a>
                                </li>
                                <li>
                                    <a>Apple Trade In</a>
                                </li>
                            </div>
                            <div className='right-lab'>
                                <span className='lnb-span'>그 외 iPad 관련항목</span>
                                <li>
                                    <a>iPad 지원</a>
                                </li>
                                <li>
                                    <a>iPad Os 16</a>
                                </li>
                                <li>
                                    <a>iCloud</a>
                                </li>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="/">iPhone</a>
                        <div className='lnb-wrap'>
                            <div className='left-lab'>
                                <span className='lnb-span'>iPhone 살펴보기</span><br/>
                                <li>
                                    <a>iPhone 14 Pro</a>
                                </li>
                                <li>
                                    <a>iPhone 14</a>
                                </li>
                                <li>
                                    <a>iPad 13</a>
                                </li>
                                <li>
                                    <a>iPad 12</a>
                                </li>
                                <li>
                                    <a>Apple SE</a>
                                </li>
                            </div>
                            <div className='center-lab'>
                                <span className='lnb-span'>iPhone 쇼핑하기</span>
                                <li>
                                    <a>iPhone 쇼핑하기</a>
                                </li>
                                <li>
                                    <a>iPhone 액세서리</a>
                                </li>
                                <li>
                                    <a>금융 혜택</a>
                                </li>
                                <li>
                                    <a>Apple Trade In</a>
                                </li>
                            </div>
                            <div className='right-lab'>
                                <span className='lnb-span'>그 외 iPhone 관련항목</span>
                                <li>
                                    <a>iPhone 지원</a>
                                </li>
                                <li>
                                    <a>iOS 16</a>
                                </li>
                                <li>
                                    <a>iPhone의 개인정보 보호</a>
                                </li>
                                <li>
                                    <a>iCloud</a>
                                </li>
                                <li>
                                    <a>지갑</a>
                                </li>
                                <li>
                                    <a>siri</a>
                                </li>
                            </div>
                        </div>
                    </li>


                    <li>
                        <a href="/">Watch</a>
                        <div className='lnb-wrap'>
                            <div className='left-lab'>
                                <span className='lnb-span'>Watch 살펴보기</span><br/>
                                <li>
                                    <a>Apple Watch Ultra</a>
                                </li>
                                <li>
                                    <a>Apple Watch Series 8</a>
                                </li>
                                <li>
                                    <a>Apple Watch SE</a>
                                </li>
                                <li>
                                    <a>Apple Watch Nike</a>
                                </li>
                                <li>
                                    <a>Apple Watch Hermes</a>
                                </li>
                            </div>
                            <div className='center-lab'>
                                <span className='lnb-span'>Watch 쇼핑하기</span>
                                <li>
                                    <a>Apple Watch 쇼핑하기</a>
                                </li>
                                <li>
                                    <a>Apple Watch Studio</a>
                                </li>
                                <li>
                                    <a>Apple Watch 밴드</a>
                                </li>
                                <li>
                                    <a>Apple Watch 악세서리</a>
                                </li>
                                <li>
                                    <a>금융혜택</a>
                                </li>
                                <li>
                                    <a>Apple Trade In</a>
                                </li>
                            </div>
                            <div className='right-lab'>
                                <span className='lnb-span'>그 외 Watch 관련항목</span>
                                <li>
                                    <a>Apple Watch 지원</a>
                                </li>
                                <li>
                                    <a>WatchOS 9</a>
                                </li>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="/">AirPods</a>
                        <div className='lnb-wrap'>
                            <div className='left-lab'>
                                <span className='lnb-span'>AirPods 살펴보기</span><br/>
                                <li>
                                    <a>AirPods 2세대</a>
                                </li>
                                <li>
                                    <a>AirPods 3세대</a>
                                </li>
                                <li>
                                    <a>AirPods Pro 2세대</a>
                                </li>
                                <li>
                                    <a>AirPods Max</a>
                                </li>

                            </div>
                            <div className='center-lab'>
                                <span className='lnb-span'>AirPods 쇼핑하기</span>
                                <li>
                                    <a>AirPods 쇼핑하기</a>
                                </li>
                                <li>
                                    <a>AirPods 액세서리</a>
                                </li>
                            </div>
                            <div className='right-lab'>
                                <span className='lnb-span'>그 외 AirPods 관련항목</span>
                                <li>
                                    <a>AirPods 지원</a>
                                </li>
                                <li>
                                    <a>Apple Music</a>
                                </li>
                            </div>
                        </div>
                        
                    </li>
                    <li>
                        <a href="/">TV 및 홈</a>
                        <div className='lnb-wrap'>
                            <div className='left-lab'>
                                <span className='lnb-span'>Tv 및 홈 살펴보기</span><br/>
                                <li>
                                    <a>Apple Tv 4k</a>
                                </li>
                            </div>
                            <div className='center-lab'>
                                <span className='lnb-span'>Apple Tv 4k 쇼핑하기</span>
                                <li>
                                    <a>Siri Remote 쇼핑하기</a>
                                </li>
                                <li>
                                    <a>Tv 및 홈 악세서리</a>
                                </li>
                            </div>
                            <div className='right-lab'>
                                <span className='lnb-span'>그 외 Tv 관련항목</span>
                                <li>
                                    <a>Apple Tv 지원</a>
                                </li>
                                <li>
                                    <a>Apple Tv 앱</a>
                                </li>
                                <li>
                                    <a>Apple Tv+</a>
                                </li>
                                <li>
                                    <a>홈 앱</a>
                                </li>
                                <li>
                                    <a>Apple Music</a>
                                </li>
                                <li>
                                    <a>Siri</a>
                                </li>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="/">엔터테인먼트</a>
                        <div className='lnb-wrap'>
                            <div className='left-lab'>
                                <span className='lnb-span'>엔터테인먼트 살펴보기</span><br/>
                                <li>
                                    <a>Apple One</a>
                                </li>
                                <li>
                                    <a>Apple Tv</a>
                                </li>
                                <li>
                                    <a>Apple Music</a>
                                </li>
                                <li>
                                    <a>Apple Arcade</a>
                                </li>
                                <li>
                                    <a>Apple Potcats</a>
                                </li>
                                <li>
                                    <a>Apple Books</a>
                                </li>
                                <li>
                                    <a>App Store</a>
                                </li>
                            </div>
                            <div className='center-lab'>
                                <span className='lnb-span'>지원</span>
                                <li>
                                    <a>Apple Tv+ 지원</a>
                                </li>
                                <li>
                                    <a>Apple Music 지원</a>
                                </li>
                            </div>
                        </div>
                    </li>

                    <li>
                        <a href="">액세서리</a>
                        <div className='lnb-wrap'>
                            <div className='left-lab'>
                                <span className='lnb-span'>액세서리 쇼핑하기</span><br/>
                                <li>
                                    <a>Mac</a>
                                </li>
                                <li>
                                    <a>iPad</a>
                                </li>
                                <li>
                                    <a>iPhone</a>
                                </li>
                                <li>
                                    <a>Apple Watch</a>
                                </li>
                                <li>
                                    <a>AirPods</a>
                                </li>
                                <li>
                                    <a>Tv 및 홈</a>
                                </li>
                            </div>
                            <div className='center-lab'>
                                <span className='lnb-span'>액세서리 살펴보기</span>
                                <li>
                                    <a>Apple 제작 정품</a>
                                </li>
                                <li>
                                    <a>beats by Dr.Dre</a>
                                </li>
                                <li>
                                    <a>Air ags</a>
                                </li>
                            </div>
                        </div>
                    </li> 

                    <li>
                        <a href='/'>게시판</a>
                    </li>
                    <li>
                        <a href="/" >검색</a>
                    </li>
                    <li>
                        <a href="/">장바구니</a>
                    </li>
                </div>
            </ul>
        </div>

    )
}

export default Header;