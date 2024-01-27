import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section id='foo_template' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>CARD DEAL <br className='sm:block hidden'/>in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor,
          purus in mattis at sed integer faucibus.
          Aliquet quis aliquet eget mauris tortor.ç 
          Aliquet ultrices ac, ametau.
        </p>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt='card'
          className='w-[100%] h-[100%]'
        />
      </div>
    </section>
  )
}

export default CardDeal