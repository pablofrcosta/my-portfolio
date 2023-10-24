import style from "./style.module.css"
import profile from '../../images/profile.png'
import { BsFileEarmarkPerson } from 'react-icons/bs'

export default function Header() {
  return (
    <div className={style.title}>
      <img src={profile} alt="Profile" />
      <h1>Pablo França</h1>
      <p>Desenvolvedor full stack</p>
      <div className={style.buttons}>
        <a href="https://github.com/pablofrcosta" target="blank"> <button>GITHUB</button></a>
        <a href="https://www.linkedin.com/in/pablo-fran%C3%A7a-b93881231/" target="blank"><button>LINKEDIN</button></a>
      </div>
      <div>
        <a href="https://drive.google.com/file/d/1bOTN4PiL-k4pYpqlq9CGn-tUB6ZDPg4w/view?usp=sharing" target="blank"><BsFileEarmarkPerson size={30} /> Curriculo</a>
      </div>
    </div>
  )
}