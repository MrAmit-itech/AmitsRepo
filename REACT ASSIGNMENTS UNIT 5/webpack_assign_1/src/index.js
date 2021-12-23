import('./index.css')
import image from '../images/note_taking.jpg'

// var h3 = document.createElement('h3')
// h3.innerText = 'Note Taking Machine'
// h3.classList.add('redcolor')

// var img = document.createElement('img')
// img.src = image

// document.getElementById('root').append(h3)

var h2 = document.createElement('h2')
h2.textContent = 'THIS IS NOTE TAKER APP'
h2.className = 'heading'

var imgDiv = document.createElement('div')
var img = document.createElement('img')
img.src = image
imgDiv.append(img)

var DisplayDiv = document.createElement('div')
DisplayDiv.className = 'Displaydiv'

var inputDiv = document.createElement('div')
inputDiv.className = 'inputDiv'

var input_block = document.createElement('input')
input_block.className = 'input'
input_block.placeholder = 'plzz enter your to do task'
var button = document.createElement('button')
button.innerText = 'submit'
button.onclick = run
inputDiv.append(input_block,button)

var root = document.getElementById('root')
root.append(h2,imgDiv,inputDiv)

function run(){
    
    var h2 = document.createElement('h2')
    h2.className='displayTaskcolor'
    h2.innerText = input_block.value
    DisplayDiv.appendChild(h2)
    root.append(DisplayDiv)
}
