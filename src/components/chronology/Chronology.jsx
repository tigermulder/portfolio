import React, {useState} from "react";
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
                      다양한 쇼핑몰 프로모션 및 이벤트 페이지의 개발과 운영에 참여하였습니다. HTML5, CSS, jQuery를 활용하여 사용자 친화적이며, 깔끔한 UI/UX를 가진 웹페이지를 구현하였습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      웹 표준과 접근성을 항상 중요하게 생각하며, 이를 기반으로 한 마크업을 진행하였습니다. 이를 통해, 모든 사용자가 동일한 웹 환경을 경험할 수 있도록 하였으며, 이는 제가 웹 접근성 및 호환성에 대한 깊은 이해를 가지고 있다는 것을 입증합니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      형상관리 도구로는 SVN을 사용하였습니다. 이를 통해 효과적으로 코드의 버전 관리를 진행하였으며, 이는 프로젝트의 안정성을 높이는 데 큰 도움이 되었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      또한, 백엔드 개발자와 웹 디자이너와의 원활한 커뮤니케이션 및 협업을 통해 프로젝트를 성공적으로 완수하였습니다. 
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이 과정에서 제가 문제를 다양한 시각에서 바라보고, 팀원들과 원활하게 소통하는 능력을 향상시킬 수 있었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이 경험을 통해, 복잡한 프로젝트를 관리하고, 다양한 팀원들과 협업하면서, 제 문제 해결 능력과 시간 관리 능력이 크게 향상되었습니다.
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
                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      레드홀릭 본사 웹페이지의 전체 구축을 담당하였습니다. HTML5, CSS, jQuery를 활용하여 웹페이지를 구현하였고, 특히 패럴랙스 효과와 wow.js 같은 시차 효과에 관한 라이브러리를 효과적으로 사용하여 독특한 사용자 경험을 제공하였습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이 웹페이지는 적응형 웹 디자인을 채택하여 다양한 기기에서도 최적화된 화면을 보여줄 수 있도록 하였습니다. 이를 통해 모든 사용자가 기기에 관계 없이 동일한 웹 환경을 경험하도록 하였으며, 이는 제가 사용자 경험 및 접근성을 고려한 개발 능력을 갖추고 있다는 것을 입증합니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이 프로젝트에서 전체 웹페이지의 구축을 혼자 담당하였기 때문에, 상당한 도전과 어려움이 있었습니다. 그러나 이 과정을 통해 독립적으로 문제를 해결하고, 프로젝트를 관리하는 능력을 크게 향상시킬 수 있었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      또한, 다양한 라이브러리를 활용하여 복잡한 효과를 구현하면서, 새로운 기술 습득 및 적용 능력을 키울 수 있었습니다. 이런 경험은 저에게 새로운 기술 트렌드에 빠르게 적응하고, 이를 실제 프로젝트에 적용하는 능력을 길러주었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이 프로젝트를 통해, 독립적인 프로젝트 수행 능력과 새로운 기술 학습 능력, 그리고 이를 실제 프로젝트에 적용하는 능력을 향상시킬 수 있었습니다. 이는 저를 더욱 능력 있는 프론트엔드 개발자로 성장시키는 데 큰 도움이 되었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service chronology_modal-service-center">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      <a href="http://www.red-holic.com/" target="_blank" rel="noopener noreferrer">http://www.red-holic.com/</a>
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
                      네스프레소와 삼성전자의 이벤트 페이지 제작 프로젝트에 참여하였습니다. HTML5, CSS, jQuery를 활용하여 사용자 친화적이며, 독특하고 즐거운 사용자 경험을 제공하는 이벤트 페이지를 성공적으로 구현하였습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이번 프로젝트에서는 특히 CSS 애니메이션을 활용하여 독특하고 화려한 시각 효과를 제공하였습니다. 이를 통해 사용자의 참여와 활동성을 높이는 데 큰 도움이 되었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이 경험을 통해, CSS 애니메이션을 통한 사용자 경험 향상 방법에 대해 깊이 있게 배울 수 있었습니다. 또한, 빠른 시간 내에 프로젝트를 완성시키면서 효율적인 시간 관리와 빠른 문제 해결 능력을 향상시킬 수 있었습니다.
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
                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      스타일24 웹페이지의 전체 리뉴얼 프로젝트를 수행하였습니다. HTML5, CSS, jQuery를 활용하여 웹페이지를 새롭게 구현하였고, 이 과정에서 웹페이지의 모듈화하였고. 이를 통해 재사용 가능한 코드를 작성하고, 유지보수를 효율적으로 진행할 수 있게 되었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      형상관리 도구로 git을 처음으로 사용하였습니다. 처음에는 git의 사용에 조금 어려움을 겪었지만, 이를 극복하고 프로젝트 관리에 효과적으로 활용할 수 있게 되었습니다. 
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이 프로젝트를 통해, 웹페이지의 모듈화 방법과 git 사용 방법을 배울 수 있었습니다. 이는 제가 더욱 효율적이고 유연한 개발 방법을 습득하고, 이를 실제 프로젝트에 적용하는 능력을 향상시킬 수 있었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이를 통해 코드의 버전 관리를 효율적으로 진행하였으며, 이는 프로젝트의 안정성을 높이는 데 큰 도움이 되었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service chronology_modal-service-center">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      <a href="https://www.style24.com/" target="_blank" rel="noopener noreferrer">https://www.style24.com/</a>
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
                      SSG 개발운영팀에서 프로모션 이벤트 페이지 및 회원 관리 임직원 사이트 등의 유지보수와 개발 작업을 수행하였습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      HTML, CSS, JavaScript를 주로 사용하여 작업을 진행하였고, 하반기에는 React를 도입하여 사이트 리뉴얼 작업을 진행하였습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이 과정에서 React라는 프레임워크를 처음으로 접하게 되었는데, 이를 통해 더 효율적이고 유연한 프론트엔드 개발 방법을 배울 수 있었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      react를 실무에서 쓰면서 SPA (Single Page Application)와 SSR(Server Side Rendering)의 차이를 경험하였고 SPA는 클라이언트(브라우저)에서, SSR은 서버에서 렌더링 한다는것을 배웠습니다. 두가지의 장단점을 몸소 체험할수있었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      형상관리는 git과 비슷한 비트버킷(Bitbucket)이라는 형상관리 도구를 처음으로 사용해보며, 효율적인 코드 관리 방법을 배울 수 있었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이외로 현업과 Jira와 Confluence, Notion을 활용하여 팀원들과 원활한 협업을 진행하였습니다. 이를 통해 팀원들과의 효율적인 커뮤니케이션과 작업 관리 방법을 배울 수 있었습니다.
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
                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      효성중공업 웹페이지의 전체 리뉴얼 프로젝트에 참여하였습니다. 이 프로젝트에서는 SSR(Server Side Rendering) 방식을 사용하여 웹페이지를 구성하였습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      SSR 방식을 사용함으로써 사용자에게 빠른 첫 페이지 로딩 속도를 제공하고, SEO(Search Engine Optimization)에 유리하도록 하였습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      형상관리 도구로는 git을 사용하여 팀원들과 원활하게 협업하였습니다. git을 통해 코드의 버전 관리를 효율적으로 진행하였으며, 이는 프로젝트의 안정성을 높이는 데 큰 도움이 되었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이번 프로젝트에서 저는 특히 JavaScript 애니메이션에 중점을 두어 작업하였습니다. 사용자와의 인터랙션을 향상시키기 위해 다양한 애니메이션 효과를 구현하였으며, 이를 통해 웹페이지의 사용자 경험을 향상시키는 데 기여하였습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      이 경험을 통해 웹페이지의 사용자 경험 향상을 위한 JavaScript 애니메이션 구현 능력과 SSR 방식의 웹페이지 구성 능력을 향상시킬 수 있었습니다.
                      </p>
                    </li>

                    <li className="chronology_modal-service chronology_modal-service-center">
                      <i className="uil uil-check-circle chronology_modal-icon"></i>
                      <p className="chronology_modal-info">
                      <a href="https://www.hyosungheavyindustries.com/kr" target="_blank" rel="noopener noreferrer">https://www.hyosungheavyindustries.com/kr</a>
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
