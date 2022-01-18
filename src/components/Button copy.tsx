import { ButtonHTMLAttributes } from 'react'
// 1) type ButtonProps = {
//   1- text?: string,
//   2- children?: string
// }

// 1) export function Button (props: ButtonProps){

  type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

  export function Button (props: ButtonProps){
  // let counter = 0

  // const [counter, setCounter] = useState(0)

  // function increment(){
  //   setCounter(counter + 1)
  //   console.log(counter)
  // }
  return(
    //1- <button>{props.text || 'Default'}</button>
    //2- <button>{props.children || 'Default'}</button>
    <button className="button" {...props}/>
  )
}
{/* <button className="" onClick={increment}>
      {counter}
    </button> */}