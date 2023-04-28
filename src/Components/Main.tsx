import React, { useState } from 'react'

import styles from './Main.module.css';

import axios from 'axios';

export const Main = ()=>{

    const [city, setCity] = useState('');

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{ 
        setCity(event.target.value);
    }

    const apiKey = "56817c46f017148ea21e7d189c4e7f8b";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    
    const getInfo = ()=>{
        axios.get(url)
        .then(response =>{
            const data = response.data;
            console.log(data);
        })
    }
    
    return (
      <div className={styles.main}>
        
        <div className={styles.header}>
            <div className={styles.logo}>climaApp</div>

            <div className={styles.searchBar}>
                <input type="text" id={styles.searchBox} placeholder="Insira o nome da sua cidade" value={city} onChange={handleInput} />
                <button className={styles.searchButton} onClick={getInfo}>Buscar</button>
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