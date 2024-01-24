import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='experience' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt='experience'
          className='w-[100%] h-[100%] relative z-[5] rounded-lg'
        />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Experience</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We possess extensive professional experience in <b>secure software development</b>, where we have successfully implemented robust strategies to identify and mitigate security vulnerabilities in large-scale projects. Additionally, our background in <b>Governance, Risk and Compliance (GRC)</b> roles within prominent corporations has equipped us with a comprehensive understanding of <b>regulatory requirements</b>, allowing us to adeptly navigate and ensure compliance in complex business environments.
        </p>
      </div>  
    </section>
  )
}

export default Billing
