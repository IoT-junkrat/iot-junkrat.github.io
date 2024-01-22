import React from 'react'
import styles from '../style'

const impressum = () => {
  return (
    <section id='impressum' className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className='flex-1 flex flex-col'>
        <h3 className={styles.heading2}>Impressum</h3>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Angaben gemäß § 5 TMG: <br/>
          SAFER Technologies UG (haftungsbeschränkt)<br/>
          Hauptstraße 35a<br/>
          77839, Lichtenau, Germany <br/><br/>

          Vertreten durch:  <br/>
          Dr. Pascal Oser<br/><br/>

          Kontakt: <br/>
          Telefon: 000000000<br/>
          E-Mail: pascal@safer.network<br/><br/>

          Umsatzsteuer-Identifikationsnummer: DE XXXXXXX<br/>
          Handelsregister: Mannheim, HRB 749608<br/>
        </p>
      </div>
    </section>
  )
}

export default impressum
