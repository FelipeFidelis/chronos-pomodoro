import style from './Header.module.css'

type HeadingProps = {
  children: string;
}

export function Heading(props: HeadingProps) {

  return (

    <h1 className={style.head}>
      {props.children}
    </h1>

  )
}
      
      