"use client";

import React from "react";
import styles from "./InfoSection.module.css";
import { BsPencilFill } from "react-icons/bs";
import ChangingText from './ChangingText'

export const InfoSection = () => {

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <ChangingText initialText="CIBER"/>
        <div className={styles.titleMark}><ChangingText initialText="SEGURIDAD"/></div>
      </div>
      <p className={styles.info}>
        Bienvenido al curso de Ciberseguridad del semillero <b>CyberMinds</b> de
        la <span className={styles.animateCharacter}>UNIR Colombia.</span> Aquí
        encontrarás recursos de aprendizaje de ciberseguridad de alta calidad,
        disponibles de forma gratuita para fortalecer tus conocimientos y
        proteger tu mundo digital.
      </p>
      <button className={styles.button}>
        Empieza a Aprender <BsPencilFill />
      </button>
    </div>
  );
};
