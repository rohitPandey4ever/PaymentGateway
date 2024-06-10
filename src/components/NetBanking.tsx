import { FormEvent, useState } from "react"
import { bankArray } from "../utils"
import ConfirmationDialog from "./ConfirmationDialog"
import PaymentOptions from "../types/paymentOptions"

const NetBanking = () => {
    const [bankName, setBankName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false)
    
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setShowConfirmationDialog(true)
    }

    // To close the dialog box when clicked on NO
    const closeDialog = () => {
        setShowConfirmationDialog(false)
    }

    const banks = bankArray.map((bank) => (
        <option
            value={bank}
            key={bank}
        >{bank}
        </option>
    ))

    return (
        <>
            <form onSubmit={onSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="bankName">Bank Name:</label>
                            </td>
                            <td>
                                <select required
                                    id="bankName"
                                    value={bankName}
                                    onChange={(event) => setBankName(event.target.value)}>
                                    <option value="" disabled>Select</option>
                                    {banks}
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="username">Username:</label>
                            </td>

                            <td>
                                <input type="text"
                                    id="username"
                                    placeholder="username"
                                    required
                                    value={userName}
                                    onChange={(event) => setUserName(event.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="password">Password:</label>
                            </td>
                            <td>
                                <input type="password"
                                    id="password"
                                    placeholder="password"
                                    required
                                    value={password}
                                    onChange={(event) => setPassword(event.target.value)}/>
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
                        paymentOptions = {PaymentOptions.NETBANKING}
                    />}
            </form>
        </>
    )

}

export default NetBanking