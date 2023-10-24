import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import veia from '../../images/veia.png'
import agenda from '../../images/agenda.png'
import gerador from '../../images/gerenciador.png'
import clima from '../../images/clima.png'
import store from '../../images/store.png'
import movie from '../../images/movie.png'
import toDo from '../../images/toDoList.png'
import style from './style.module.css'

export default function Projects() {

  return (
    <div className={style.projectsImg}>
      <img src={movie} alt="" className={style.imageProject} />
      <img src={store} alt="" className={style.imageProject} />
      <img src={toDo} alt="" className={style.imageProject} />
      <img src={veia} alt="" className={style.imageProject} />
      <img src={agenda} alt="" className={style.imageProject} />
      <img src={gerador} alt="" className={style.imageProject} />
      <img src={clima} alt="" className={style.imageProject} />

    </div>
  );
}
