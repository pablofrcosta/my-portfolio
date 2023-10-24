import style from './style.module.css'

export default function Background() {
  return (
    <div className={style.container}>
      <div className={style.stars}></div>
      <div className={style.twinkling}></div>
      <div className={style.clouds}></div>
    </div>
  )
}