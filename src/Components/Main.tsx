import React, { useState } from 'react'

import styles from './Main.module.css';

export const Main = ()=>{

    const [city, setCity] = useState('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{ 
        setCity(event.target.value);
      }
     
    
    return (
      <div className={styles.main}>
        
        <div className={styles.header}>
            <div className={styles.logo}>climaApp</div>

            <div className={styles.searchBar}>
                <input type="text" id={styles.searchBox} placeholder="Insira o nome da sua cidade" value={city} onChange={handleInput} />
            </div>
        </div>
        
        <div className={styles.containerCard}>

            <div className={styles.cardClima}>
                <div className={styles.info}>
                    <span className={styles.name}>Curitiba</span>
                    <span className={styles.temp}>14</span>
                    <span className={styles.desc}>Nublado</span>
                </div>
            </div>

        </div>
        


      </div>
    );

}