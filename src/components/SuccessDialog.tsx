import PaymentOptions from "../types/paymentOptions"
import Dialog from "./Dialog"
import './SuccessPayment.css'

type OnClose = {
    onClose: () => void
    paymentOptions: PaymentOptions
}

const SuccessDialog = (props: OnClose) => {
    return (
        <Dialog>
            <div  style={{ textAlign: "center" }}>
            <h1>Your payment of Rs 5000 is successful!!</h1>
           <div>Your payment was done through {props.paymentOptions}</div>
            <button className="btn btn-close"
            onClick={props.onClose}>Close</button>
            </div>
        </Dialog>
    )
}

export default SuccessDialog