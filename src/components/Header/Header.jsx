import './Header.css';

let firstWord = ['Fundamental ', 'Crucial ', 'Core ']
function getData (){
  return Math.trunc(Math.random()* 3)
}

export default function Header(){
  let data = firstWord[getData()]
  return(
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {data} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}