import React from 'react'
import styles from '../style'
import Button from './Button'
import ButtonVCard from './ButtonVCard'

const CTA = () => {
  return (
    <section id='contact' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's work together!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Use the buttons to send us an eMail or call us directly.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button />
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <ButtonVCard />
      </div>
    </section>
  )
}
export default CTA
