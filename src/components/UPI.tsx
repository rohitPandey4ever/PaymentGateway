import { FormEvent, useState } from "react"
import ConfirmationDialog from "./ConfirmationDialog"
import PaymentOptions from "../types/paymentOptions"

const UPI = () => {
    const [upi, setUpi] = useState('')

    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false)
    
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
                                <label htmlFor="upi">Enter UPI Id:</label>
                            </td>
                            <td>
                                <input type="text"
                                    id="upi"
                                    value={upi}
                                    onChange={(event) => setUpi(event.target.value)} />
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

export default UPI