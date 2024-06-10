import './Menu.css'
import PaymentOptions from '../types/paymentOptions'
import { useState } from 'react'
import Card from './Card'
import NetBanking from './NetBanking'
import UPI from './UPI'

// We've a list of strings
const options = [
    PaymentOptions.CARD,
    PaymentOptions.NETBANKING,
    PaymentOptions.UPI
]
// console.log(options)

// We need this list of buttons - let us use map() to generate this array of buttons.
// const buttons = [
//     <button className='payment-option payment-option-selected'>A</button>,
//     <button className='payment-option'>B</button>,
//     <button className='payment-option'>C</button>
// ]

const Menu = () => {
    const [selectedOption, setSelectedOption] = useState(PaymentOptions.CARD)
    const buttons = options.map((option) => (
        <button
            className={
                "payment-option" +
                (option === selectedOption ? " payment-option-selected" : "")}
            key={option}
            onClick={() => setSelectedOption(option)}
        >
            {option}
        </button>
    ))//'key' should be the unique identity of that particular object. In this value of option(strings) is unique so its option.

    return (
        <div className='menu'>
            <div className='payment-options'>{buttons}</div>
            <div className='payment-details'>
                {selectedOption === PaymentOptions.CARD && <Card/>}
                {selectedOption === PaymentOptions.UPI && <UPI/>}
                {selectedOption === PaymentOptions.NETBANKING && <NetBanking/>}
                
            </div>
        </div>
    )
}

export default Menu