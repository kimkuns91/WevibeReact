import React, { useEffect } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const Main = (props) => {
  return (
    <div className="WeVibe">
      <div className="header">
        <div id="wrap" className="h_nav ">
          <p className="h_logo">
            <img src="/img/h_logo.png" alt="위바이브로고" /> WEVIBE
          </p>
          <ul className="category">
            <li>
              <a href="#team">Team DEV</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="#viderX">viber X</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="#lawline">문서작성 AI 로라인</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="/Works">Works</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.setRequirementsModal(true);
                }}
              >
                요구사항 명세서
              </p>
            </li>
          </ul>
        </div>
        <div id="wrap" className="h_container">
          <ul className="dev">
            <li>
              <img className="DImg" src="/img/D.png" alt="Data" />
            </li>
            <li>
              <img className="EImg" src="/img/E.png" alt="Experience" />
            </li>
            <li>
              <img className="VImg" src="/img/V.png" alt="Value" />
            </li>
          </ul>
          <h3>데이터로 경험을, 경험으로 가치를 만듭니다.</h3>
          <p>
            위바이브는 <span>유저의 경험 데이터</span>가
            <span>차이를 만들어낸다고 믿습니다.</span>
          </p>
          <p>위바이브는 AI 기반으로 지속 발전 가능한 성장 모델을 발굴하여</p>
          <p>새로운 경험과 가능성을 모색합니다.</p>
        </div>
      </div>

      <p>
        <a id="team"></a>
      </p>
      <div id="wrap" className="team">
        <p>
          <img
            className="DEVImg"
            src="/img/d,e,a.png"
            alt="Data,Experience,Value"
          />
        </p>
        <h4>Meet Our Team</h4>
        <ul className="team_name">
          <li>
            <img
              className="Alex"
              src="/img/Alex.png"
              alt="Alex General Manager"
            />
          </li>
          <li>
            <img
              className="kun-woo"
              src="/img/kun-woo.png"
              alt="Kun-woo Lead PM"
            />
          </li>
          <li>
            <img
              className="jake"
              src="/img/jake.png"
              alt="jake Lead Designer"
            />
          </li>
          <li>
            <img
              className="chan"
              src="/img/chan.png"
              alt="chan Lead Developer"
            />
          </li>
          <li>
            <img
              className="danny"
              src="/img/danny.png"
              alt="danny Lead UX/UI"
            />
          </li>
          <li>
            <img className="jay" src="/img/jay.png" alt="jay Lead Manager" />
          </li>
        </ul>
      </div>

      <p>
        <a id="viderX"></a>
      </p>
      <div className="viderX">
        <div id="wrap">
          <p>핵심 기술 Core Tech </p>
          <h2>viber X</h2>
          <ul>
            <li>
              사용자의 취향 , 관심 스타일을
              <br />
              <span>스타일 매칭 코디 AI 솔루션 , viber X</span>
            </li>
            <li></li>
            <li>
              유저, 상품 거래 등의 데이터를 분석해
              <br />
              이커머스소비자와 운영자에게만족스러운 결과를 제공합니다
            </li>
          </ul>
        </div>
      </div>

      <div id="wrap" className="ai ai_1">
        <h4>개인화 추천</h4>
        <p>
          지속적으로 데이터를 수집함에 따라 사용자의 취향과 구매패턴을 파악해
        </p>
        <p>더욱 높은 구매율을 목표로하는 추천 알고리즘이 구성됩니다</p>
        <ul>
          <li>ATP</li>
          <li>담기횟수</li>
          <li>구매율</li>
          <li>
            비슷한
            <br />
            상품
          </li>
          <li>
            외부
            <br />
            데이터
          </li>
          <li>리뷰</li>
        </ul>
      </div>

      <div id="wrap" className="ai ai_2">
        <h4>AI 코디매칭</h4>
        <p>
          유사한 패턴의 구매자들이 선택한 아이템 혹은 함께 자주 담긴 아이템을
          추천해
        </p>
        <p>하나의 제품이 아닌 코디 전체를 추천하고 구매를 돕습니다.</p>
        <p>
          <img
            className="ai_coding"
            src="/img/ai_coding.png"
            alt="AI 코디매칭"
          />
        </p>
      </div>

      <div id="wrap" className="ai ai_3">
        <h4>
          <a id="ai_styling"></a>AI 스타일링
        </h4>
        <p>
          최신 유행하는 스타일을 추천 , 사용자가 제일 선호하는 스타일링을 추천해
          줍니다.
        </p>
        <p>
          <img
            className="ai_styling"
            src="/img/ai_ styling.png"
            alt="AI 스타일링"
          />
        </p>
      </div>

      <p>
        <a id="lawline"></a>
      </p>
      <div className="lawline">
        <div id="wrap">
          <p>
            <img
              className="lawline_logo"
              src="/img/lawline_logo.png"
              alt="lawline_logo"
            />
          </p>
          <h2>AI 문서작성 도우미 로라인</h2>
          <p className="text">
            작성하기 힘든 각종 서류,문서 양식을 자동으로 채우고 필요한 서류를
            찾아서 준비해주는 AI기반 서비스
          </p>
        </div>
      </div>

      <div id="wrap" className="lawline_img">
        <p>
          <img
            className="lawline"
            src="/img/lawline.png"
            alt="AI 문서작성 도우미 lawline"
          />
        </p>
        <ul>
          <li>
            <img
              className="lawline_1"
              src="/img/lawline_1.png"
              alt="lawline기능1 준비서류안내"
            />
          </li>
          <li>
            <img
              className="lawline_2"
              src="/img/lawline_2.png"
              alt="lawline기능2 자동완성기능"
            />
          </li>
          <li>
            <img
              className="lawline_3"
              src="/img/lawline_3.png"
              alt="lawline기능3 기존작성내역 불러오기"
            />
          </li>
        </ul>
      </div>

      <div id="wrap" className="works">
        <h3>
          <a href="/works" id="Works">
            WORKS
          </a>
        </h3>
        <p>보다 입체적인 솔루션과 디자인을 제안합니다</p>
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={10000}
        loop={true}
        spaceBetween={50}
        slidesPerView={3}
        className="sample-slider sample-slider"
        freeMode={true}
        resistance={true}
        resistanceRatio={0.85}
      >
        <SwiperSlide className="swiper-slide">
          <img src="/img/works2.png" alt="abraxas 사이트제작" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works1.png" alt="zenian 사이트제작" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works3.png" alt="법과사람들 사이트제작" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works5.png" alt="아브락삭스 끼브리자 디자인" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works8.png" alt="우리동네카센터 제작" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works7.png" alt="디블럭,우리동네카센터 사이트제작" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works6.png" alt="법무법인정곡 사이트제작" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src="/img/works4.png" alt="디블럭필터 디자인" />
        </SwiperSlide>
      </Swiper>

      <div className="footer">
        <ul>
          <li>회사명 : 위바이브(주) | wevibe Inc.</li>

          <li>메일 : help@wevibe.co.kr</li>
          <li>사업자번호: 477-87-01651</li>
          <li>연락처: 070-5067-1558</li>
          <li>팩스: 0504-075-5272</li>
        </ul>

        <p>
          <span>대표이사 : 김종식, 김수은</span>
        </p>

        <p>
          <span>
            주소: 서울특별시 금천구 가산디지털2로 67, 에이스하이엔드타워 9층
          </span>
        </p>

        <p>ⓒ 2023 wevibe Inc. All Rights Reserved.</p>
      </div>
    </div>
  );
};
export default Main;
