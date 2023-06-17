import { useEffect } from 'react'
import './App.css'

export default function App() {
  useEffect(() => {
    const input = document.getElementById("input")
    const buttons = document.querySelectorAll("button")
    const buttonsArray = Array.from(buttons)
    let string = ""

    buttonsArray.map((button) => {
      button.addEventListener("click", function(e) {
        const text = e.target.innerText

        if(text === "AC") {
          if(input.value) {
            string = ""
          }
        }
        else if(text === "DE") {
          if(input.value) {
            string = string.substring(0, string.length - 1)
          }
        }
        else if(text === "=") {
          try {
            if(input.value) {
              string = eval(string)
            }
          }
          catch {
            string = "Undefined!"
          }
        }
        else {
          string += text
        }

        input.value = string
      })
    })
  }, [])

  return (
    <>
      <section className='container'>
        <input type="text" placeholder='0' id='input'/>

        <div>
          <button className='other'>AC</button>  
          <button className='other'>DE</button>  
          <button className='main'>%</button>  
          <button className='main'>/</button>  
        </div>  
        <div>
          <button>7</button>  
          <button>8</button>  
          <button>9</button>  
          <button className='main'>*</button>  
        </div>  
        <div>
          <button>4</button>  
          <button>5</button>  
          <button>6</button>  
          <button className='main'>-</button>  
        </div>  
        <div>
          <button>1</button>  
          <button>2</button>  
          <button>3</button>  
          <button className='main'>+</button>  
        </div>  
        <div>
          <button>0</button>  
          <button className='main'>.</button>  
          <button className='equal'>=</button>    
        </div>  
      </section>
    </>
  )
}