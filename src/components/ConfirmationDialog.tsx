import Dialog from "./Dialog"
import { useState } from "react"
import './SuccessDialog'
import SuccessDialog from "./SuccessDialog"
import PaymentOptions from "../types/paymentOptions"

type NoProp = {
    onClickNo: () => void
    paymentOptions: PaymentOptions
}

const ConfirmationDialog = (props: NoProp) => {
    const [showSuccessDialog, setShowSuccessDialog] = useState(false)

    return showSuccessDialog ? <SuccessDialog
        onClose={props.onClickNo}
        paymentOptions={props.paymentOptions}
    /> : (
        <Dialog>
            <div style={{ textAlign: "center" }}>
                <h3>Proceed to complete the payment?</h3>
                <button className="btn btn-cancel"
                    onClick={props.onClickNo}>No</button>
                <button className="btn btn-confirm"
                    onClick={() => setShowSuccessDialog(true)} >Yes</button>
            </div>
        </Dialog>
    )
}

export default ConfirmationDialog