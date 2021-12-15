import React, {useEffect, useState} from 'react';
import './CurrencyConverter.scss';
import axios from "axios";
import {currencyRU} from "./helpers";
import {language} from "./helpers";
import logo from '../../img/logo1.png'
import phoneImg from '../../img/home123.png'
import logoImg from '../../img/logoIcon.png'
import checkIcon from '../../img/checkIcon.png'
import internet from '../../img/internet666.png'
import flagRu from '../../img/Flag111.png'
import flagEn from '../../img/Flag2222.png'


const CurrencyConverter = () => {
    const [currencyEN, setCurrencyEN] = useState(null)
    const [price, setPrice] = useState(null)
    const [rightListCurrencies, setRightListCurrencies] = useState(false)
    const [sprache, setSprache] = useState(false)
    const [lang, setLang] = useState('RU')
    const [currencyRight, setCurrencyRight] = useState('RUB')
    const [number, setNumber] = useState(1)

    useEffect(() => {
        axios.get("https://openexchangerates.org/api/currencies.json")
            .then(response => setCurrencyEN(response?.data))
            .catch(error => console.log(error))
    },[])

    useEffect(() => {
        axios.get("https://openexchangerates.org/api/latest.json?app_id=3a383efe5f81428a89dffe8f9e82a7f8")
            .then(response => setPrice(response?.data.rates))
            .catch(error => console.log(error))
    },[])


    return currencyEN && price
        ? <div>
            <div className='currencyConverter'>
                <div className='container'>
                    <div className='currencyConverter__header'>
                        <img className='currencyConverter__header__logo' src={logo} alt="logo"/>
                        <div className='switchBlock'>
                            <div onClick={() => sprache ? setSprache(false) : setSprache(true)} className='currencyConverter__header__icon'>
                                {sprache ? <button onClick={() => setSprache(false)} className='buttonActive'></button>: null}
                                <img src={internet} alt="icon"/>
                                <p>{language.langIcon[lang]}</p>
                            </div>
                            <div className='switchBlock__wrap'>
                                <div
                                    onClick={() => setSprache(false)}
                                    className={sprache ? 'currencyConverter__header__switchBlockActive currencyConverter__header__switchBlock' : 'currencyConverter__header__switchBlockNone'}
                                >
                                    <div className='switchBlock__textActive'>
                                        <div>
                                            <img src={flagEn} alt="flagEn"/>
                                            <p onClick={() => setLang('EN')}>EN</p>
                                        </div>
                                        <div>
                                            <img src={flagRu} alt="flagRu"/>
                                            <p onClick={() => setLang('RU')}>RU</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='currencyConverter__content'>
                        <h1>{language.title[lang]}</h1>
                        <p>{language.subTitle[lang]}</p>
                    </div>
                    <div className='currencyConverter__calculator'>
                        <div className='currencyConverter__calculator__send currencyConverter__calculator__box'>
                            <div className='currencyConverter__calculator__box__block'>
                                <p>USD</p>
                            </div>
                            <div className='currencyConverter__calculator__box__info'>
                                <p>{language.boxDesc[lang]}</p>
                                <input
                                    onChange={event => setNumber(event.target.value)}
                                    type="number"
                                    value={number}
                                />
                            </div>
                        </div>
                        <div className='currencyConverter__calculator__switch'>
                            <img src={logoImg} alt="img"/>
                        </div>
                        <div className='currencyConverter__calculator__receive currencyConverter__calculator__box'>
                            <div
                                onClick={() => rightListCurrencies ? setRightListCurrencies(false) : setRightListCurrencies(true)}
                                className='currencyConverter__calculator__box__block currencyConverter__calculator__box__block__active'
                            >
                                <p>{currencyRight}</p>
                                <img  className={rightListCurrencies ? 'currencyConverter__calculator__box__block__img' : 'currencyConverter__calculator__box__block__img__active'} src={checkIcon} alt="icon"/>
                            </div>
                            <div className='currencyConverter__calculator__box__info'>
                                <p>{language.boxResultDesc[lang]}</p>
                                <input value={number ? (price[currencyRight] * number).toFixed(2) : ''} type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className={rightListCurrencies ? 'currencyConverter__calculator__box__block__desc' : 'currencyConverter__calculator__box__block__desc_none'}>
                        {Object.keys(currencyRU).map((item, idx) => <p onClick={() => {setCurrencyRight(item)
                            rightListCurrencies ? setRightListCurrencies(false) : setRightListCurrencies(true)
                        }} key={idx} value={item}
                        >
                            {lang === 'RU' ? `${item} ${currencyRU[item]}` : `${item} ${currencyEN[item]}`}</p>)}
                    </div>
                    <div className='currencyConverter__desc'>
                        <h2>{language.info[lang]}</h2>
                        <p>{language.infoDesc[lang]}</p>
                    </div>
                </div>
                <div className='currencyConverter__img'>
                    <img src={phoneImg} alt="logo"/>
                </div>
            </div>
        </div>
        : null
}

export default CurrencyConverter;
