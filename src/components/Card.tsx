import { FormEvent, useState } from "react"
import { range } from "../utils"
import ConfirmationDialog from "./ConfirmationDialog"
import PaymentOptions from "../types/paymentOptions"



const Card = () => {
    const [cardNumber, setCardNumber] = useState("")
    const [name, setName] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")
    const [cvv, setCvv] = useState("")

    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false)

    const d = new Date()
    const currentYear = d.getFullYear()

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setShowConfirmationDialog(true)
    }

    // To close the dialog box when clicked on NO
    const closeDialog = () => {
        setShowConfirmationDialog(false)
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="cardNumber">
                                    Credit/Debit Card Number: <br /> (12 Digit number)
                                </label>
                            </td>
                            <td>
                                <input type="number"
                                    id="cardNumber"
                                    name="cardNumber"
                                    placeholder="0000 0000 0000"
                                    min={100000000000}
                                    max={999999999999}
                                    value={cardNumber}
                                    onChange={event => setCardNumber(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="name">Name:</label>
                            </td>
                            <td>
                                <input type="text"
                                    id="name"
                                    placeholder="As on Card"
                                    value={name}
                                    onChange={event => setName(event.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="expiryDate">Expiry Date:</label>
                            </td>
                            <td>
                                <select name="month"
                                    id="expiryDate"
                                    value={month}
                                    onChange={event => setMonth(event.target.value)}
                                >
                                    <option value="" disabled>mm</option>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                    <option value="7">07</option>
                                    <option value="8">08</option>
                                    <option value="9">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                </select>
                                <select name="year"
                                    id="expiryDate"
                                    value={year}
                                    onChange={event => setYear(event.target.value)}
                                >
                                    <option value="" disabled>year</option>
                                    {
                                        range(currentYear, currentYear + 12).map(year => <option value={year} key={year}>{year}</option>)
                                    }
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="cvv">CVV:</label>
                            </td>
                            <td>
                                <input type="number"
                                    id="cvv"
                                    placeholder="CVV"
                                    min={100}
                                    max={999}
                                    value={cvv}
                                    onChange={event => setCvv(event.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className="btn btn-pay">Pay</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                {showConfirmationDialog &&
                    <ConfirmationDialog
                        onClickNo={closeDialog}
                        paymentOptions = {PaymentOptions.CARD}
                    />}
            </form>
        </>
    )
}

export default Card