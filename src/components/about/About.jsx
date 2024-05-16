import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about.jpg"
import Info from "./info";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About</h2>
      <span className="section_subtitle">My introduction</span>
      <div className="about_container container grid">
        <img src={AboutImg} alt="" className="about_img" />
        <div className="about_data">
          <Info/>
          <p className="about_description">
          고객의 니즈를 이해하고 피드백을 반영하여 기술적으로 해결함으로써 
          사용자 경험의 흐름을 파악하여 최적화하고 비즈니스 가치를 창출하는 것이 FE개발자라고 생각합니다.

          새로운 기술 학습에도 관심이 많지만, 기술과 문제의 본질을 파악하는 것을 더 중요하게 생각합니다. 
          저는 비즈니스 가치를 구현할 수 있는 능력이 개발자가 갖춰야 할 가장 중요한 역량이라고 믿습니다. 
          항상 상황에 맞게 최상의 결과물을 도출하기 위해 노력해왔습니다.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
