import style from "./style.module.css"
import { DiAngularSimple, DiBootstrap, DiCss3, DiGithubBadge, DiJavascript1, DiReact, DiPhotoshop, DiMongodb, DiNodejsSmall, DiSass } from "react-icons/di";
import { BiLogoTypescript } from 'react-icons/bi'

import Projects from "../Projects";

export default function Section() {
  return (
    <section>
      <div className={style.about}>
        <div className={style.box}>
          <p style={{ fontSize: '7vmin' }}>Sobre mim</p>
          <p style={{ fontSize: '3vmin' }}>
            Olá, sou Pablo, um entusiasta de tecnologia de 19 anos de idade. Atualmente, estou seguindo dois emocionantes caminhos acadêmicos: sou estudante de engenharia de software na Unopar e também estou me especializando em desenvolvimento web fullstack na OneBitcode.
            <p>
              Minha jornada no mundo da tecnologia começou há um ano e desde então, tenho investido tempo e dedicação para aprimorar minhas habilidades. Enquanto muitos jovens passam seu tempo livre de forma casual, eu opto por dedicar meu tempo no computador para estudar e também para jogar, uma combinação que reflete minha paixão pela aprendizagem contínua e pelo universo da tecnologia.
            </p>
            Estou comprometido em continuar minha evolução profissional e pessoal, explorando as infinitas possibilidades que a engenharia de software e o desenvolvimento web têm a oferecer. Seja desenvolvendo soluções inovadoras ou criando experiências envolventes na web, estou pronto para enfrentar os desafios e abraçar as oportunidades que o futuro reserva.
            Vamos construir um futuro brilhante juntos! 💻🚀
          </p>
        </div>
      </div >
      <div className={style.skills}>
        <h1>Habilidades</h1>
        <div className={style.lgIcons}>
          <div className={style.iconContent}><DiAngularSimple className={style.icon} /><p>Angular</p></div>
          <div className={style.iconContent}><DiBootstrap className={style.icon} />Bootstrap</div>
          <div className={style.iconContent}><DiCss3 className={style.icon} />Css3</div>
          <div className={style.iconContent}><DiGithubBadge className={style.icon} />Github</div>
          <div className={style.iconContent}> <DiJavascript1 className={style.icon} />Javascript</div>
          <div className={style.iconContent}><DiMongodb className={style.icon} />Mongodb</div>
          <div className={style.iconContent}> <DiNodejsSmall className={style.icon} />Node.js</div>
          <div className={style.iconContent}><DiPhotoshop className={style.icon} />Photoshop</div>
          <div className={style.iconContent}><DiReact className={style.icon} />React</div>
          <div className={style.iconContent}><DiSass className={style.icon} />Sass</div>
          <div className={style.iconContent}><BiLogoTypescript className={style.icon} />Typescript</div>
        </div>
      </div>
      <div className={style.projects}>
        <Projects />
      </div>
    </section >
  )
}