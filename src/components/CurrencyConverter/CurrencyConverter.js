import React, {useEffect, useState} from 'react';
import './CurrencyConverter.scss';
import axios from "axios";
import {currencyDesc} from "./helpers";
import logo from '../../img/logo01.png'

const CurrencyConverter = () => {
    /*const [currencyValue, setCurrencyValue] = useState(null)

    useEffect(() => {
        axios.get("https://openexchangerates.org/api/latest.json?app_id=3a383efe5f81428a89dffe8f9e82a7f8")
            .then(response => setCurrencyValue(response?.data?.rates))
            .catch(error => console.log(error))
    },[])*/

    return(
        <div className='currencyConverter'>
            <div className='container'>
                <div className='currencyConverter__header'>
                    <img src={logo} alt="logo"/>
                </div>
                <div className='currencyConverter__content'>
                    <h1>Конвертер валют</h1>
                    <p>Конвертируйте популярные валюты по эффективным курсам обмена с помощью нашего <br/> калькулятора-конвертера валют.</p>
                </div>
                <div className='currencyConverter__calculator'>
                    <div className='currencyConverter__calculator__send currencyConverter__calculator__box'></div>
                    <div className='currencyConverter__calculator__switch'><p>---</p></div>
                    <div className='currencyConverter__calculator__receive currencyConverter__calculator__box'></div>
                </div>
            </div>
        </div>

        /*<div className='currencyConv'>
            {
                currencyValue
                    ? Object.keys(currencyValue).map(item => (
                        <div>
                            <p>{`${currencyDesc[item]}`} - <strong>{`${currencyValue[item].toFixed(2)} ${item}`}</strong></p>
                            <br />
                        </div>
                    ))
                    : null
            }
        </div>*/
    )
}

export default CurrencyConverter;
