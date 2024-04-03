import React, {useState, useEffect} from "react";
import "./chronology.css";

const Chronology = () => {
  const [toggleState,setToggleState] = useState(3);
  const [toggleState2,setToggleState2] = useState(0);
  function toggleTap(idx){
    setToggleState(idx);
  }
  function toggleModal(idx){
    setToggleState2(idx);
  }
  useEffect(() => {
    if (toggleState2 !== 0) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [toggleState2]);
  return (
    <section className="chronology section" id='chronology'>
      <h2 className="section_title">Chronology</h2>
      <span className="section_subtitle">My chronology</span>
      <div className="chronology_container container">
        <div className="chronology_taps">
          <div className={toggleState === 1 ? "chronology_button chronology_active button--flex" : "chronology_button button--flex"}
          onClick={()=> toggleTap(1)}
          >
            <i className="uil uil-graduation-cap chronology_icon"></i> Education
          </div>

          <div className={toggleState === 2 ? "chronology_button chronology_active button--flex" : "chronology_button button--flex"}
          onClick={()=> toggleTap(2)}
          >
            <i className="uil uil-briefcase-alt chronology_icon"></i> Experience
          </div>

          <div className={toggleState === 3 ? "chronology_button chronology_active button--flex" : "chronology_button button--flex"}
          onClick={()=> toggleTap(3)}
          >
            <i className="uil uil-briefcase-alt chronology_icon"></i> Project
          </div>
        </div>

        <div className="chronology_sections">
          <div className={toggleState === 1 ? "chronology_content chronology_content-active" : "chronology_content"}>
            <div className="chronology_data">
              <div>
                <h3 className="chronology_title">경복고등학교</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2007.01-2010.01
                </div>
              </div>

              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
            </div>

            <div className="chronology_data">
              <div></div>

              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
              <div>
                <h3 className="chronology_title">백석예술대학교(중퇴)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2010.03-2011.06
                </div>
              </div>
            </div>

            <div className="chronology_data">
              <div>
                <h3 className="chronology_title">그린아카데미(학원)<br /> 스마트웹&콘텐츠 개발</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2017.10-2018.03
                </div>
              </div>

              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
            </div>

            <div className="chronology_data">
              <div></div>

              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
              <div>
                <h3 className="chronology_title">학점은행제(학사학위)</h3>
                <span className="chronology_subtitle">Internet</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2011.06-2024.02
                </div>
              </div>
            </div>

          </div>

          <div className={toggleState === 2 ? "chronology_content chronology_content-active" : "chronology_content"}>
            <div className="chronology_data">
              <div>
                <h3 className="chronology_title">레드홀릭(주)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2018.05-2020.08
                </div>
              </div>

              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
            </div>

            <div className="chronology_data">
              <div></div>

              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
              <div>
                <h3 className="chronology_title">코드파트너즈(주)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2020.10-2021.05
                </div>
              </div>
            </div>

            <div className="chronology_data">
              <div>
                <h3 className="chronology_title">바이널씨(주)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2021.05-2023.03
                </div>
              </div>

              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
            </div>
          </div>

          <div className={toggleState === 3 ? "chronology_content chronology_content-active" : "chronology_content"}>
            <div className="chronology_data">
              <div onClick={()=> toggleModal(1)} className="chronology_data-project">
                <h3 className="chronology_title">삼성물산 SSF 운영팀(파견)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2018.05-2020.01
                </div>
                <p className="chronology_arrow_box left">삼성물산 SSF 운영팀 에서 어떤것을 경험하고 변화했는지 알아볼까요? Click !</p>
              </div>
              
              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
            </div>
              {/* Modal - start */}
              <div className={toggleState2 === 1 ? "chronology_modal active-modal" : "chronology_modal"}>
                <div className="chronology_modal-content">
                  <i onClick={()=> toggleModal(0)} className="uil uil-times chronology_modal-close"></i>

                  <h3 className="chronology_modal-title">삼성물산 SSF 운영팀(파견)</h3>
                  <p className="chronology_modal-description">
                  삼성물산 SSF 운영팀 퍼블리셔 (1년 6개월)
                  </p>

                  <ul className="chronology_modal-services grid">
                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      쇼핑몰 내의 프로모션과 이벤트, 그리고 '일 꼬르소 꼬모' 페이지 등을 웹 표준에 맞게 퍼블리싱.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      Javascript, Jquery, css, HTML, SVN 사용.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      백엔드 개발자와 웹 디자이너와 협업. 
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      시행착오 : 프로젝트 초기에는 IE 11을 포함한 다양한 브라우저에서 동일한 UI를 제공해야 하는 요구사항이 있었습니다. IE에서는 지원되지 않는 CSS 속성이나 특정 버전에서만 발생하는 문제가 있었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      해결과정 : Autoprefixer를 사용하여 CSS와 JavaScript를 자동으로 변환하는 작업을 도입했습니다. flexbox 대신 테이블 레이아웃을 활용하는 등의 수정을 진행했습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      주요성과 : Autoprefixer를 적용함으로써 CSS 속성에 대한 벤더 프리픽스를 자동으로 추가하여 각 브라우저에서 일관되게 웹페이지가 보여지도록 조치하였습니다. IE를 사용하는 사용자에게 확인을 요청하고, 어떠한 문제도 없는지 피드백을 수집했습니다.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Modal - end */}
            <div className="chronology_data">
              <div></div>

              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
              <div onClick={()=> toggleModal(2)} className="chronology_data-project">
                <h3 className="chronology_title">레드홀릭(주)본사 구축 퍼블리싱</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2020.01-2020.04
                </div>
                <p className="chronology_arrow_box right">레드홀릭(주)본사 구축 Project에서 어떤것을 경험하고 변화했는지 알아볼까요? Click !</p>
              </div>
            </div>
              {/* Modal - start */}
              <div className={toggleState2 === 2 ? "chronology_modal active-modal" : "chronology_modal"}>
                <div className="chronology_modal-content">
                  <i onClick={()=> toggleModal(0)} className="uil uil-times chronology_modal-close"></i>

                  <h3 className="chronology_modal-title">레드홀릭(주)본사 구축 퍼블리싱</h3>
                  <p className="chronology_modal-description">
                  레드홀릭 본사 웹페이지 구축 (4개월)
                  </p>
                  
                  <ul className="chronology_modal-services grid">
                    <li className="chronology_modal-service chronology_modal-service-center">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      <a href="http://www.red-holic.com/" target="_blank" rel="noopener noreferrer">http://www.red-holic.com/</a>
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      레드홀릭 본사 웹페이지의 전체 구축(1인개발).
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      HTML5, CSS, jQuery, JavaScript, FTP 사용.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      적응형 웹디자인
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      시행 착오 : 작업인원이 부족해 1인으로 진행했습니다. 다양한 디바이스 화면 크기에 대응하여 이를 위해 동적인 디자인을 구현하는것이 어려웠습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      해결 과정 : 적응형 웹디자인 이슈로 경험이 좋지않은 상황을 개선하기위해 미디어쿼리와 레이아웃 배치에 중점을 두어 적응형 디자인을 보다 효과적으로 적용했습니다. 로컬 환경에서 다양한 디바이스와 화면 크기에서 테스트하여 적응형 레이아웃이 제대로 적용되는지 확인하였습니다. 웹페이지를 이용하는 사용자들에게 피드백을 요청하여, 다양한 디바이스에서 사용 시 어떠한 문제가 없는지 확인하고 개선점을 파악했습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      주요 성과 : 리뉴얼후 웹페이지의 반응성과 방문자수가 20%이상 증가했습니다. 다양한 디바이스와 화면 크기에서의 테스트를 통해 웹페이지가 모든 디바이스에서 잘 동작함을 확인했습니다. 사용자들의 피드백을 수집하여 해당 내용을 반영함으로써 사용자들의 만족도가 증가하고 사용성이 향상되었습니다.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Modal - end */}
            <div className="chronology_data">
              <div onClick={()=> toggleModal(3)} className="chronology_data-project">
                <h3 className="chronology_title">네스프레소 및 삼성전자 이벤트페이지</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2020.04-2020.08
                </div>
                <p className="chronology_arrow_box left">네스프레소 및 삼성전자 이벤트페이지 외주 Project에서 어떤것을 경험하고 변화했는지 알아볼까요? Click !</p>
              </div>

              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
            </div>
              {/* Modal - start */}
              <div className={toggleState2 === 3 ? "chronology_modal active-modal" : "chronology_modal"}>
                <div className="chronology_modal-content">
                  <i onClick={()=> toggleModal(0)} className="uil uil-times chronology_modal-close"></i>

                  <h3 className="chronology_modal-title">네스프레소 및 삼성전자 이벤트페이지</h3>
                  <p className="chronology_modal-description">
                  네스프레소 및 삼성전자 이벤트 페이지 제작 (1개월)
                  </p>

                  <ul className="chronology_modal-services grid">
                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      네스프레소와 삼성전자의 이벤트 페이지 제작.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      HTML5, CSS, SASS(SCSS), jQuery, JavaScript 사용
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      시행 착오 : 외주 프로젝트를 하며 3D 효과를 CSS로 구현하는 도중 문제에 직면했습니다. 페이지에 부드러운 3D 전환을 추가하려 했으나, 특히 하드웨어 성능과 브라우저 호환성 문제로 인해 예상치 못한 어려움에 직면했습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      원인 파악 : 몇몇 사용자의 컴퓨터에서 3D 효과가 부드럽게 동작하지 않는 것을 확인했습니다. 특정 브라우저에서만 3D 효과가 원활하게 동작하며, 다른 브라우저에서는 예기치 못한 결과를 보였습니다. 초기에 작성한 CSS 코드가 복잡해져서 유지보수가 어려워졌습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      해결 과정 : 먼저, 하드웨어 성능 문제와 브라우저 호환성에 대비하여 대안을 마련하는 계획을 세웠습니다. 3D 효과가 적용된 페이지를 다양한 디바이스에서 테스트하여 성능 문제를 파악했습니다. 이를 위해 Chrome DevTools와 브라우저 개발자 도구를 활용했습니다.  CSS 코드를 최적화하고, GPU 가속을 통해 하드웨어 성능을 최대한 활용할 수 있도록 수정했습니다. 이 과정에서는 SASS를 사용하여 코드를 구조화했습니다. Autoprefixer 툴을 사용하여 벤더 프리픽스를 자동으로 추가했습니다. 초기에 작성한 복잡한 CSS 코드를 리팩토링하여 가독성을 높이고 유지보수를 용이하게 만들었습니다. 
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이러한 경험을 통해, 3D 효과를 CSS로 구현하면서 발생하는 다양한 문제에 대한 스토리 형식으로 문제를 진단하고, 원인을 파악하며, 해결하는 과정을 거치면서 실무적인 능력을 키울 수 있었습니다.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Modal - end */}
            <div className="chronology_data">
              <div></div>

              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
              <div onClick={()=> toggleModal(4)} className="chronology_data-project">
                <h3 className="chronology_title">스타일24 리뉴얼</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2020.10-2021.02
                </div>
                <p className="chronology_arrow_box right">스타일24 리뉴얼 Project에서 어떤것을 경험하고 변화했는지 알아볼까요? Click !</p>
              </div>
            </div>
              {/* Modal - start */}
              <div className={toggleState2 === 4 ? "chronology_modal active-modal" : "chronology_modal"}>
                <div className="chronology_modal-content">
                  <i onClick={()=> toggleModal(0)} className="uil uil-times chronology_modal-close"></i>

                  <h3 className="chronology_modal-title">스타일24 웹페이지 리뉴얼 (4개월)</h3>
                  <p className="chronology_modal-description">
                  스타일24 웹페이지 리뉴얼 (4개월)
                  </p>

                  <ul className="chronology_modal-services grid">
                    <li className="chronology_modal-service chronology_modal-service-center">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      <a href="https://www.style24.com/" target="_blank" rel="noopener noreferrer">https://www.style24.com/</a>
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      스타일24 웹페이지의 전체 리뉴얼 프로젝트 수행(적응형).
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      Javascript, Jquery, html, npm, Git, css, slack 사용
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      시행 착오 : PL이 계속 바뀌는 프로젝트에서 임시 PL역할을 하게 되었습니다. 이전 작업자의 인수인계가 제대로 없었기에 기술스택과 아키텍처선정이 필요하였습니다. 버전관리와 협업도구 설정이 필요하였습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      해결 과정 : 기존의 프로젝트 관련 문서를 정리하고 업데이트하여 새로 합류하는 팀원들이 프로젝트의 현재 상태를 파악할 수 있도록 했습니다. 코드 스타일 가이드를 작성하고 코드 리뷰 프로세스를 도입하여 품질을 유지하고 새로 합류하는 팀원들이 일관된 방식으로 코드를 작성할 수 있도록 했습니다. 프로젝트 관련 업무의 할당과 추적을 위한 툴 slack을 활용하여 업무의 투명성을 유지했습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      주요 성과 : 작업 완료 시간 단축: 이전에는 특정 작업을 완료하는 데 평균 5일이 걸렸지만, 최근에는 같은 작업을 평균 3일로 단축했습니다. 따라서 작업 완료 시간이 총 40% 줄었습니다. 업무 완료량 증가: 이전에는 주간 평균적으로 10개의 업무가 완료되었지만, 코드 스타일가이드 작성후 주간 평균적으로 20개의 업무가 완료되었습니다. 따라서 업무 완료량이 총 100% 증가했습니다.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Modal - end */}
            <div className="chronology_data">
              <div onClick={()=> toggleModal(5)} className="chronology_data-project">
                <h3 className="chronology_title">SSG 개발운영팀(파견)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2021.02-2022.12
                </div>
                <p className="chronology_arrow_box left">SSG 개발운영팀(파견) Project에서 어떤것을 경험하고 변화했는지 알아볼까요? Click !</p>
              </div>

              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
            </div>
              {/* Modal - start */}
              <div className={toggleState2 === 5 ? "chronology_modal active-modal" : "chronology_modal"}>
                <div className="chronology_modal-content">
                  <i onClick={()=> toggleModal(0)} className="uil uil-times chronology_modal-close"></i>

                  <h3 className="chronology_modal-title">SSG 개발운영팀(파견)</h3>
                  <p className="chronology_modal-description">
                  SSG 개발운영팀에서의 프로젝트 경험 (1년 10개월)
                  </p>

                  <ul className="chronology_modal-services grid">
                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      주문상세페이지 review컴포넌트 react 고도화. 임직원몰 modal컴포넌트 react고도화. SSG CS팀 dashboard react고도화. 프로모션페이지 퍼블리싱작업.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      스택 : node js, Javascript, React.js, Webpack, gulp, Jquery, npm
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      형상관리 비트버킷(Bitbucket), 협업툴 Jira, Confluence, Notion 
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      시행 착오 : React를 처음 사용할 때, 프레임워크에 대한 이해 부족으로 초기 작업이 어려웠고, SPA와 SSR의 차이를 명확히 이해하지 못하여 렌더링 이슈가 발생했습니다. Bitbucket을 처음 사용하면서 충돌 및 형상 관리에 대한 어려움을 겪었습니다. 협업 도구인 Jira, Confluence, Notion 등을 효과적으로 활용하지 못하여 업무 효율이 떨어졌습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      해결 과정 : React 기초 교육을 완료하고 예제 프로젝트를 실습하여 익숙해짐으로써 초기 학습 곡선을 극복했습니다. 관련 자료와 블로그 포스트를 통해 SPA와 SSR의 동작 원리를 이해하고 프로젝트에 적용하며 경험했습니다. Bitbucket의 공식 문서를 참고하고 동료들에게 질문하여 Git 습관을 활용하여 효과적인 형상 관리 방법을 습득했습니다. 협업 도구의 기능을 숙지하기 위해 학습 시간을 투자하고, 동료들과의 협업에서 각 도구를 적재적소에 활용하여 업무 진행을 도모했습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      주요 성과 : React 기초 교육 및 실습으로 인해 초기 작업이 어려웠던 문제를 해결하여, 초기 작업에 걸리는 시간을 최소 20% 감소했습니다. SPA 및 SSR 이해도 향상: SPA와 SSR의 동작 원리를 이해하고 프로젝트에 적용하여 렌더링 이슈를 최소 30% 개선했습니다. Bitbucket의 공식 문서 참고 및 동료들과의 협업을 통해 충돌 및 형상 관리에 대한 이해도를 향상시켜, 문제가 발생하는 빈도를 50%이상 감소시켰습니다. 업무 효율 개선: Jira, Confluence, Notion 등의 협업 도구를 효과적으로 활용하여 업무의 효율을 최소 20% 이상향상시켰습니다.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Modal - end */}
            <div className="chronology_data">
              <div></div>

              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
              <div onClick={()=> toggleModal(6)} className="chronology_data-project">
                <h3 className="chronology_title">효성중공업 리뉴얼</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2023.01-2023.03
                </div>
                <p className="chronology_arrow_box right">효성중공업 리뉴얼 Project에서 어떤것을 경험하고 변화했는지 알아볼까요? Click !</p>
              </div>
            </div>
              {/* Modal - start */}
              <div className={toggleState2 === 6 ? "chronology_modal active-modal" : "chronology_modal"}>
                <div className="chronology_modal-content">
                  <i onClick={()=> toggleModal(0)} className="uil uil-times chronology_modal-close"></i>

                  <h3 className="chronology_modal-title">효성중공업 리뉴얼</h3>
                  <p className="chronology_modal-description">
                  효성중공업 웹페이지 리뉴얼 (3개월)
                  </p>

                  <ul className="chronology_modal-services grid">
                    <li className="chronology_modal-service chronology_modal-service-center">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      <a href="https://www.hyosungheavyindustries.com/kr" target="_blank" rel="noopener noreferrer">https://www.hyosungheavyindustries.com/kr</a>
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      효성중공업 웹페이지의 전체 리뉴얼 프로젝트. 
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      스택 :  Javascript, Jquery, yarn, css
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      형상관리 git, 협업툴 slack
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      메인page애니메이션 구현. company 회사소개 page 패럴렉스 효과구현.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      주요성과 : 런칭후 고객만족도 조사에서 85점이상의 점수를 받았고 웹사이트의 애니메이션 효과와 고객사의 긍정적인 반응이있었습니다.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Modal - end */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chronology
