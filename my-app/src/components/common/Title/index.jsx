import style from './title.module.css'

function Title(props) {
  return <h2 className={style.title}>{props.title}</h2>
}

export default Title;