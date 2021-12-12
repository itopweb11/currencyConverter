import React, {useEffect, useState} from 'react';
import './CurrencyConverter.scss';
import axios from "axios";
import {currencyRU} from "./helpers";
import {language} from "./helpers";
import logo from '../../img/logo01.png'
import phoneImg from '../../img/home123.png'
import logoImg from '../../img/logoIcon.png'
import checkIcon from '../../img/checkIcon.png'
import internet from '../../img/internet666.png'

const CurrencyConverter = () => {
    const [currencyEN, setCurrencyEN] = useState(null)

    const [sprache, setSprache] = useState(false)
    const [lang, setLang] = useState('RU')

    const [currencyLeft, setCurrencyLeft] = useState('')
    const [currencyRight, setCurrencyRight] = useState('')

    useEffect(() => {
        axios.get("https://openexchangerates.org/api/currencies.json")
            .then(response => setCurrencyEN(response?.data))
            .catch(error => console.log(error))
    },[])

    return(
        <div>
            {sprache ? <button onClick={() => setSprache(false)} className='buttonActive'></button>: null}
            <div className='currencyConverter'>
                <div className='container'>
                    <div className='currencyConverter__header'>
                        <img src={logo} alt="logo"/>
                        <div onClick={() => sprache ? setSprache(false) : setSprache(true)} className='currencyConverter__header__icon'>
                            <img src={internet} alt="icon"/>
                            <p>{language.langIcon[lang]}</p>
                        </div>
                        <div
                            onClick={() => setSprache(false)}
                            className={sprache ? 'currencyConverter__header__switchBlockActive currencyConverter__header__switchBlock' : 'currencyConverter__header__switchBlockNone'}
                        >
                            <p onClick={() => setLang('EN')}>EN England</p>
                            <p onClick={() => setLang('RU')}>RU Русский</p>
                        </div>
                    </div>
                    <div className='currencyConverter__content'>
                        <h1>{language.title[lang]}</h1>
                        <p>{language.subTitle[lang]}</p>
                    </div>
                    <div className='currencyConverter__calculator'>
                        <div className='currencyConverter__calculator__send currencyConverter__calculator__box'>
                            <div className='currencyConverter__calculator__box__block'>
                                <label>
                                    <select onChange={(e) => setCurrencyLeft(e.target.value)}>
                                        {Object.keys(currencyRU).map((item, idx) => <option key={idx} value={item}>
                                            {lang === 'RU' ? `${item} ${currencyRU[item]}` : `${item} ${currencyEN[item]}`}</option>)}
                                    </select>
                                </label>
                            </div>
                            <div className='currencyConverter__calculator__box__info'>
                                <input type="text"/>
                            </div>
                        </div>
                        <div className='currencyConverter__calculator__switch'>
                            <img src={logoImg} alt="img"/>
                        </div>
                        <div className='currencyConverter__calculator__receive currencyConverter__calculator__box'>
                            <div className='currencyConverter__calculator__box__block'>
                                <select onChange={(e) => setCurrencyRight(e.target.value)}>
                                    {Object.keys(currencyRU).map((item, idx) => <option key={idx} value={item}>
                                        {lang === 'RU' ? `${item} ${currencyRU[item]}` : `${item} ${currencyEN[item]}`}</option>)}
                                </select>
                            </div>
                            <div className='currencyConverter__calculator__box__info'>
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className='currencyConverter__desc'>
                        <h2>{language.info[lang]}</h2>
                        <p>{language.infoDesc[lang]}</p>
                    </div>
                    {/* <div className='currencyConv'>
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
                </div>*/}
                </div>
                <div className='currencyConverter__img'>
                    <img src={phoneImg} alt="logo"/>
                </div>
            </div>
        </div>
    )
}

export default CurrencyConverter;
