import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => {
  return (
    <section id='contact' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h2 className={styles.heading2}>Let's work together!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Send us an eMail to get in contact with us.
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0`}>
        <Button email="info@safer.network" subject="Interest in your services" body="How can we assist you?" />
      </div>
    </section>
  )
}

export default CTA
