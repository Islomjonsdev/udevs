import Link from 'next/link';
import React from 'react';
import style from "./ContactUs.module.scss"

const ContactUs = () => {
  return (
    <div className={style.contact_us}>
        <Link href={"/"}>Связаться</Link>
    </div>
  )
}

export default ContactUs