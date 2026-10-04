import React, { useState, useCallback } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import "./chronology.css";

const Chronology = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState(3);
  const [activeModal, setActiveModal] = useState(0);

  // 모달이 열려있을 때 body 스크롤 잠금
  useBodyScrollLock(activeModal !== 0);

  const handleTabChange = useCallback((tabIndex) => {
    setActiveTab(tabIndex);
  }, []);

  const handleModalToggle = useCallback((modalIndex) => {
    setActiveModal(modalIndex);
  }, []);

  return (
    <section className="chronology section" id='chronology'>
      <h2 className="section_title">{t('chronologyTitle')}</h2>
      <span className="section_subtitle">{t('chronologySubtitle')}</span>

      <div className="chronology_container container">
        <div className="chronology_taps">
          <div
            className={
              activeTab === 1
                ? "chronology_button chronology_active button--flex"
                : "chronology_button button--flex"
            }
            onClick={() => handleTabChange(1)}
          >
            <i className="uil uil-graduation-cap chronology_icon"></i> {t('education')}
          </div>

          <div
            className={
              activeTab === 2
                ? "chronology_button chronology_active button--flex"
                : "chronology_button button--flex"
            }
            onClick={() => handleTabChange(2)}
          >
            <i className="uil uil-briefcase-alt chronology_icon"></i> {t('experience')}
          </div>

          <div
            className={
              activeTab === 3
                ? "chronology_button chronology_active button--flex"
                : "chronology_button button--flex"
            }
            onClick={() => handleTabChange(3)}
          >
            <i className="uil uil-briefcase-alt chronology_icon"></i> {t('project')}
          </div>
        </div>

        <div className="chronology_sections">
          {/* ---------------- Education ---------------- */}
          <div
            className={
              activeTab === 1
                ? "chronology_content chronology_content-active"
                : "chronology_content"
            }
          >
            <div className="chronology_data">
              <div>
                <h3 className="chronology_title">
                  학점은행제(경영학 학사)
                </h3>
                <span className="chronology_subtitle">cyber university</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2021.08-2024.02
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
                <h3 className="chronology_title">
                  그린아카데미(학원)
                  <br /> 스마트웹&콘텐츠 개발
                </h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2017.10-2018.03
                </div>
              </div>
            </div>

            <div className="chronology_data">
              <div>
                <h3 className="chronology_title">백석예술대학교(중퇴)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2010.03-2011.06
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
                <h3 className="chronology_title">경복고등학교</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2007.01-2010.01
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- Experience ---------------- */}
          <div
            className={
              activeTab === 2
                ? "chronology_content chronology_content-active"
                : "chronology_content"
            }
          >
            <div className="chronology_data">
              <div></div>
              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
              <div>
                <h3 className="chronology_title">밀리언웨어 (프리랜서)</h3>
                <span className="chronology_subtitle">
                  국내 대형 반도체 기업 클라우드 플랫폼
                </span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2026.07-현재
                </div>
              </div>
            </div>

            <div className="chronology_data">
              <div>
                <h3 className="chronology_title">BHSN, CLM CORE UNIT</h3>
                <span className="chronology_subtitle">서울특별시</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2025.07-2026.07
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
                <h3 className="chronology_title">트래포트(주)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2025.03-2025.06
                </div>
              </div>
            </div>

            <div className="chronology_data">
              <div></div>
              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
              <div>
                <h3 className="chronology_title">JAMONG LAB(주)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2024.09-2025.03
                </div>
              </div>
            </div>

            <div className="chronology_data">
              <div>
                <h3 className="chronology_title">코드파트너즈(주)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2020.10-2023.03
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
                <h3 className="chronology_title">레드홀릭(주)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2018.05-2020.08
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- Project ---------------- */}
          <div
            className={
              activeTab === 3
                ? "chronology_content chronology_content-active"
                : "chronology_content"
            }
          >
            {/* [8] Private Cloud Platform */}
            <div className="chronology_data">
              <div></div>
              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
              <div onClick={() => handleModalToggle(8)} className="chronology_data-project">
                <h3 className="chronology_title">☁️ 사내 클라우드 플랫폼 개발·운영</h3>
                <span className="chronology_subtitle">밀리언웨어 · 프리랜서</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2026.07-현재
                </div>
                <p className="chronology_arrow_box right">
                  클라우드 플랫폼에서 수행한 풀스택 개발과 운영 경험을 확인해보세요. Click !
                </p>
              </div>
            </div>
            {/* Modal */}
            <div
              className={
                activeModal === 8
                  ? "chronology_modal active-modal"
                  : "chronology_modal"
              }
            >
              <div className="chronology_modal-content">
                <i
                  onClick={() => handleModalToggle(0)}
                  className="uil uil-times chronology_modal-close"
                ></i>

                <h3 className="chronology_modal-title">
                  ☁️ 사내 프라이빗 클라우드 플랫폼
                </h3>
                <p className="chronology_modal-description">
                  국내 대형 반도체 기업의 클라우드 플랫폼 풀스택 개발 및 Kubernetes 기반 서비스 운영
                </p>

                <ul className="chronology_modal-services grid">
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      React 18, TypeScript, Vite, pnpm 기반 프론트엔드 개선 및 신규 기능 개발
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Java 11, Maven, Gradle, MyBatis, Oracle 기반 API 및 데이터 처리
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      프로젝트 생성 시 자원관리 계정을 직접 검색하고 매핑할 수 있는 UI 및 API 개발
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      별도 요청을 통한 수동 매핑 절차를 사용자 셀프서비스 방식으로 개선
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      프로젝트별 CPU, Memory, GPU, Pod 가용 자원 조회 API 개발
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      문자열 비교 기반 생성·승인 판단 로직을 백엔드 Enum 기반 정책으로 개선
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      생성 불가·수동 승인·자동 승인 흐름을 API 응답으로 일관되게 관리
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      요청·응답 DTO와 유효성 검사 확인, 프론트엔드 연동 테스트 및 개발 환경 배포
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Kubernetes Pod 상태 확인, 로그 분석, 배포, 재시작, 리소스 조정 및 장애 대응
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Docker, Helm, Argo CD, Jenkins, Grafana 기반 배포·운영·모니터링
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Claude Code와 사내 승인 LLM을 활용한 일감 분배·프론트엔드·백엔드·DBA·Git 에이전트 구성
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      node-oracledb와 테이블 관계 정보를 활용한 SQL 및 MyBatis Mapper 작성 지원 환경 구축
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      에이전트가 생성한 코드와 SQL을 직접 검토·테스트한 뒤 개발 환경에 반영
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      브랜치 생성부터 커밋·푸시·머지까지 이어지는 Git 워크플로 자동화
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* [1] BHSN CLM Core AI Draft */}
            <div className="chronology_data">
              <div onClick={() => handleModalToggle(1)} className="chronology_data-project">
                <h3 className="chronology_title">🤖 BHSN, Allibee</h3>
                <span className="chronology_subtitle">서울특별시</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2025.07-2026.07
                </div>
                <p className="chronology_arrow_box left">
                  BHSN에서 어떤것을 경험하고 변화했는지 알아볼까요? Click !
                </p>
              </div>
              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
            </div>
            {/* Modal */}
            <div
              className={
                activeModal === 1
                  ? "chronology_modal active-modal"
                  : "chronology_modal"
              }
            >
              <div className="chronology_modal-content">
                <i
                  onClick={() => handleModalToggle(0)}
                  className="uil uil-times chronology_modal-close"
                ></i>

                <h3 className="chronology_modal-title">
                  🤖 BHSN CLM Core AI Draft
                </h3>
                <p className="chronology_modal-description">
                  CLM Core AI Draft 개발 및 삼성SDS On-Premise 솔루션 딜리버리 작업
                </p>

                <ul className="chronology_modal-services grid">
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Svelte, SvelteKit, Git, Sentry, GitActions 사용
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Frontend Developer 역할 수행
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      CLM Core AI Draft 개발
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      SSE(Server-Sent Events)를 활용한 AI Draft 스트리밍 UI 구현
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      법무 계약 데이터를 AI 친화적 컨텍스트로 재구성
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      생성·취소·재요청 등 AI 워크플로우 상태 관리 설계
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      삼성SDS On-Premise 솔루션 딜리버리 작업 (모노레포 프론트엔드 리소스로 내부에서 구축 프로젝트)
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      <a href="https://www.legaltimes.co.kr/news/articleView.html?idxno=89398" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                        리걸타임스 기사 보기
                      </a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* [2] 하나비즈 복지몰 (TraPort) */}
            <div className="chronology_data">
              <div></div>
              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
              <div onClick={() => handleModalToggle(2)} className="chronology_data-project">
                <h3 className="chronology_title">🏨 하나비즈 복지몰 (Trafort)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2025.03-2025.06
                </div>
                <p className="chronology_arrow_box right">
                  하나비즈 복지몰 Project에서 어떤것을 경험하고 변화했는지 알아볼까요? Click !
                </p>
              </div>
            </div>
            {/* Modal */}
            <div
              className={
                activeModal === 2
                  ? "chronology_modal active-modal"
                  : "chronology_modal"
              }
            >
              <div className="chronology_modal-content">
                <i
                  onClick={() => handleModalToggle(0)}
                  className="uil uil-times chronology_modal-close"
                ></i>

                <h3 className="chronology_modal-title">
                  🏨 하나비즈 복지몰 (TraPort)
                </h3>
                <p className="chronology_modal-description">
                  기아·현대 임직원 전용 SSO 기반 여행(숙박) 예약 복지몰 (3개월)
                </p>

                <ul className="chronology_modal-services grid">
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Angular 9, TypeScript, NgRx, RxJS 사용
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      프론트엔드 책임연구원 역할 수행
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      RxJS 타이머 연산자 활용한 Polling 개선
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      서버 부하 감소 및 불필요한 API 호출 최소화
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      전체 API 호출 횟수 감소로 프론트·백 모두 성능 향상
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* [3] 리뷰클릭 (JamongLab) */}
            <div className="chronology_data">
              <div onClick={() => handleModalToggle(3)} className="chronology_data-project">
                <h3 className="chronology_title">🎯 리뷰클릭 (JamongLab)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2024.09-2025.03
                </div>
                <p className="chronology_arrow_box left">
                  리뷰클릭 Project에서 어떤것을 경험하고 변화했는지 알아볼까요? Click !
                </p>
              </div>
              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
            </div>
            {/* Modal */}
            <div
              className={
                activeModal === 3
                  ? "chronology_modal active-modal"
                  : "chronology_modal"
              }
            >
              <div className="chronology_modal-content">
                <i
                  onClick={() => handleModalToggle(0)}
                  className="uil uil-times chronology_modal-close"
                ></i>

                <h3 className="chronology_modal-title">
                  🎯 리뷰클릭 (JamongLab)
                </h3>
                <p className="chronology_modal-description">
                  검증된 리뷰를 통해 캠페인 참여를 유도하는 B2B2C 쇼핑 리워드 플랫폼 (6개월)
                </p>

                <ul className="chronology_modal-services grid">
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Vite, React, TypeScript, Recoil, React Query, Axios 사용
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      프론트엔드 개발 총괄 역할
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      전체 프론트 설계 및 개발 (Admin 제외)
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      캠페인 상세페이지, D-Day 계산, 퍼널 UX 적용
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      세션 만료 대응 로직 및 자동 로그아웃 처리
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      visualViewport로 모바일 키보드 대응
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      신청 버튼 UX 개선으로 이탈률 30% 이상 감소
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Suspense 및 useSuspenseQuery 도입으로 UX 개선
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* [4] SSG 쇼핑몰 컴포넌트 개발 */}
            <div className="chronology_data">
              <div></div>
              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
              <div onClick={() => handleModalToggle(4)} className="chronology_data-project">
                <h3 className="chronology_title">
                  🛒 SSG 쇼핑몰 컴포넌트 개발 (코드파트너즈)
                </h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2021.01-2023.03
                </div>
                <p className="chronology_arrow_box right">
                  SSG 쇼핑몰 컴포넌트 개발 Project에서
                  어떤것을 경험하고 변화했는지 알아볼까요? Click !
                </p>
              </div>
            </div>
            {/* Modal */}
            <div
              className={
                activeModal === 4
                  ? "chronology_modal active-modal"
                  : "chronology_modal"
              }
            >
              <div className="chronology_modal-content">
                <i
                  onClick={() => handleModalToggle(0)}
                  className="uil uil-times chronology_modal-close"
                ></i>

                <h3 className="chronology_modal-title">
                  🛒 SSG 쇼핑몰 컴포넌트 개발
                </h3>
                <p className="chronology_modal-description">
                  SSG 쇼핑몰 마이크로 컴포넌트 설계 및 최적화 (2년 2개월)
                </p>

                <ul className="chronology_modal-services grid">
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      React, Next.js, Recoil, React Query 사용
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      마이크로 컴포넌트 설계 및 최적화 담당
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Web/Service 팀 분리 문제 해결
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Recoil 전역 상태 관리, React.memo 및 useCallback 최적화
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Next.js SSR 전환 및 SEO 개선
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      렌더링 횟수 40% 개선
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      페이지 로딩 속도 향상, 유지보수성 및 재사용성 증가
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* [5] 스타일24 리뉴얼 */}
            <div className="chronology_data">
              <div onClick={() => handleModalToggle(5)} className="chronology_data-project">
                <h3 className="chronology_title">🧑‍💻 스타일24 리뉴얼 (코드파트너즈)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2020.11-2021.01
                </div>
                <p className="chronology_arrow_box left">
                  스타일24 리뉴얼 Project에서 어떤것을 경험하고 변화했는지 알아볼까요? Click !
                </p>
              </div>
              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
            </div>
            {/* Modal */}
            <div
              className={
                activeModal === 5
                  ? "chronology_modal active-modal"
                  : "chronology_modal"
              }
            >
              <div className="chronology_modal-content">
                <i
                  onClick={() => handleModalToggle(0)}
                  className="uil uil-times chronology_modal-close"
                ></i>

                <h3 className="chronology_modal-title">🧑‍💻 스타일24 리뉴얼</h3>
                <p className="chronology_modal-description">
                  스타일24 리뉴얼 및 개발 환경 정비 (2개월)
                </p>

                <ul className="chronology_modal-services grid">
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      HTML, CSS, jQuery, Webpack, Babel 사용
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      PL/TF 역할로 프로젝트 리드
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      인수인계 부재 상황에서 기술 스택 표준화
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      ESLint, Webpack, Babel 도입
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Notion·Slack 기반 실시간 소통 및 문서화 체계 구축
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      작업 시간 단축(5일 → 3일), 업무 완료량 2배 증가
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      신규 인원 온보딩 시간 단축
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* [6] 레드홀릭 웹사이트 리뉴얼 */}
            <div className="chronology_data">
              <div></div>
              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
              <div onClick={() => handleModalToggle(6)} className="chronology_data-project">
                <h3 className="chronology_title">🌐 레드홀릭 웹사이트 리뉴얼</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2020.03-2020.08
                </div>
                <p className="chronology_arrow_box right">
                  레드홀릭 웹사이트 리뉴얼 Project에서 어떤것을 경험하고 변화했는지 알아볼까요? Click !
                </p>
              </div>
            </div>
            {/* Modal */}
            <div
              className={
                activeModal === 6
                  ? "chronology_modal active-modal"
                  : "chronology_modal"
              }
            >
              <div className="chronology_modal-content">
                <i
                  onClick={() => handleModalToggle(0)}
                  className="uil uil-times chronology_modal-close"
                ></i>

                <h3 className="chronology_modal-title">🌐 레드홀릭 웹사이트 리뉴얼</h3>
                <p className="chronology_modal-description">
                  레드홀릭 웹사이트 1인 기획·디자인·퍼블리싱 (5개월)
                </p>

                <ul className="chronology_modal-services grid">
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      HTML, CSS, JavaScript, jQuery 사용
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      1인 기획·디자인·퍼블리싱 전담
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      기획부터 배포까지 단독 수행
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      반응형 웹 구현, 커뮤니티와 레퍼런스 적극 활용
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      방문자 수 20% 증가
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      사용자 만족도 향상 및 반응형 대응 완료
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            {/* [7] 삼성물산 SSF몰 */}
            <div className="chronology_data">
              <div onClick={() => handleModalToggle(7)} className="chronology_data-project">
                <h3 className="chronology_title">🛍 삼성물산 SSF몰 (퍼블리셔 TF)</h3>
                <span className="chronology_subtitle">Seoul</span>
                <div className="chronology_calender">
                  <i className="uil uil-calendar-alt"></i> 2018.05-2020.01
                </div>
                <p className="chronology_arrow_box left">
                  삼성물산 SSF몰 Project에서 어떤것을 경험하고 변화했는지 알아볼까요? Click !
                </p>
              </div>
              <div>
                <span className="chronology_rounder"></span>
                <span className="chronology_line"></span>
              </div>
            </div>
            {/* Modal */}
            <div
              className={
                activeModal === 7
                  ? "chronology_modal active-modal"
                  : "chronology_modal"
              }
            >
              <div className="chronology_modal-content">
                <i
                  onClick={() => handleModalToggle(0)}
                  className="uil uil-times chronology_modal-close"
                ></i>

                <h3 className="chronology_modal-title">🛍 삼성물산 SSF몰 (퍼블리셔 TF)</h3>
                <p className="chronology_modal-description">
                  삼성물산 SSF몰 퍼블리셔 TF (1년 8개월)
                </p>

                <ul className="chronology_modal-services grid">
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      HTML, CSS, jQuery 사용
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      IE 호환성 이슈 해결
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      Autoprefixer, polyfill, 조건부 주석, 벤더 프리픽스 등 대응
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      다양한 브라우저 호환성 확보
                    </p>
                  </li>
                  <li className="chronology_modal-service">
                    <i className="uil uil-check-circle chronology_modal-icon"></i>
                    <p className="chronology_modal-info">
                      크로스브라우징 환경 구성 경험
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chronology;
