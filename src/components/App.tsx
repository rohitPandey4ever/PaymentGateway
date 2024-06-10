import Menu from './Menu'
import './App.css'

const App = ( ) => {
  return(
    <div className='app'>
        <h1 className='app-title'>Choose your mode of payment and complete the purchase</h1>
        <Menu/>
    </div>
  )
}




export default App

//Rough Practice
// type Props =  {
//   title: string;
//   message: string;
// }

// const App = (props: Props) => {
// console.log(props)
//   return (
//     <div id="message">
//       {props.message} <strong title={props.title}>React</strong>
//     </div>
//   )
// }

// export default App