import React from 'react'
import style from "./Button.module.scss"

const Button = ({title, ...props}) => {
  return (
    <div {...props}>
        <button className={style.btn}>{title}</button>
    </div>
  )
}

export default Button