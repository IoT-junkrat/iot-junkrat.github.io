import React from 'react'
import { experience } from '../constants'
import styles from '../style'

const Experience = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {experience.map((experience) => (
          <div key={experience.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px]`}>
            <img
              src={experience.logo}
              alt='experience'
              className='sm:w-[192px] w-[100px] object-contain'
            />           
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
