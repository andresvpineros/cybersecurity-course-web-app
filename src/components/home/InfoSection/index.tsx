'use client'

import React from 'react'
import styles from './InfoSection.module.css'
import { BsPencilFill } from "react-icons/bs";
import { RandomReveal } from 'react-random-reveal'

export const InfoSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
            <RandomReveal
              isPlaying
              duration={2}
              revealDuration={1}
              characters="ciber"
              onComplete={() => ({ shouldRepeat: true, delay: 6 })}
            />
          <div className={styles.titleMark}>
            <RandomReveal
              isPlaying
              duration={2}
              revealDuration={1}
              characters="seguridad"
              onComplete={() => ({ shouldRepeat: true, delay: 8 })}
            />
          </div>
      </div>
        <p className={styles.info}>Bienvenido al curso de Ciberseguridad del semillero <b>CyberMinds</b> de la <b>UNIR Colombia</b>. Aquí encontrarás recursos de aprendizaje de ciberseguridad de alta calidad, disponibles de forma gratuita para fortalecer tus conocimientos y proteger tu mundo digital.</p>
        <button className={styles.button}>Empieza a Aprender <BsPencilFill/></button>
    </div>
  )
}
