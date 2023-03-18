import style from './Content.module.css'

const Content = () => {
  return (
    <div className={style.content}>
      <h2>Título</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic deleniti quo explicabo odit id in aliquam cumque magni earum autem quod aut totam atque distinctio veniam eligendi perferendis, rerum dolorum.
      </p>
      <button className={style.btn}>Outro botão teste</button>
    </div>
  )
}

export default Content