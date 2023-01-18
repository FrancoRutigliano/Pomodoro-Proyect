//Inicio de Variables

let workTitulo = document.querySelector('#work')
let breakTitulo = document.querySelector('#break')

let workTime = 25
let breakTime = 5

let seconds = '00'

//Fin de variables

//DISPLAY

window.onload = () => {
  document.getElementById('minutes').innerHTML = workTime
  document.getElementById('seconds').innerHTML = seconds

  workTitulo.classList.add('active')
}

// START TIEMPO

function start() {
  
  document.getElementById('start').style.display = "none"
  document.getElementById('reset').style.display = "block"
  
  //contador de segundos
  seconds = 59

  let workMinutes = workTime - 1
  let breakMinutes = breakTime - 1

  let breakCount = 0

  // Contador //
  
  let timerfunction = () => {
    document.getElementById('minutes').innerHTML = workMinutes
    document.getElementById('seconds').innerHTML = seconds
    
    seconds = seconds - 1

    if(seconds === 0){
      workMinutes = workMinutes - 1
      if(workMinutes === -1){
        if(breakCount % 2 === 0){
          
          workMinutes = breakMinutes
          breakCount++

          //cambiar color del panel 
          workTitulo.classList.remove('active')
          breakTitulo.classList.add('active')

        }else{
          workMinutes = workTime
          breakCount++

          //cambiar color del panel 
          breakTitulo.classList.remove('active')
          workTitulo.classList.add('active')
        }
      }
      seconds = 59
    }

  }

  setInterval(timerfunction, 1000)

}
