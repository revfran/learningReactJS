import { useEffect, useState, useReducer} from "react"
import './App.css';

function Header({ owner }) {
  return (<header><h1>"Learn React, by {owner}"</h1></header>)
}

function SecretHeader({ owner }) {
  return (<header><h1>"Congrats, {owner}. You unlocked the secretHeader"</h1></header>)
}

const awesomeList = [
  "first item",
  "second item",
  "third item"
]
const awesomeListObj = awesomeList.map((awesomeListItem, index) => ({ key: index, value: awesomeListItem }))

function Main(props) {
  const [checked, toggle] = useReducer(
    (checked) => !checked,
    false)

  return (
    <section>
      <p>This is just the body of the page</p>
      <p>
        <input type="checkbox" value={checked} onChange={toggle} />
        {checked ? "checked" : "not checked"}</p>
      <img src="https://github.com/revfran.png" height={200} alt="revfran github"></img>
      <ul>
        {props.awesomeList.map((awesomeListItemObj) => (<li key={awesomeListItemObj.key}>{awesomeListItemObj.value}</li>))}
      </ul>
    </section>)
}

function Footer(props) {
  return (<footer><p>It's cool to have a footer in place.</p><p>Copyright {props.year}</p></footer>)
}

function HeaderRenderer({ enableSecretHeader, secretSetter, owner }) {
  return (<>{
    enableSecretHeader ? <SecretHeader owner={owner} /> : <Header owner={owner} />
  }
    <button onClick={() => secretSetter(true)}>Show secrets</button>
    <button onClick={() => secretSetter(false)}>Hide secrets</button>
  </>);
}

function App() {
  const [secretFlag, secretSetter] = useState(true)

  useEffect(() => {
    console.log(`Secret flag changed to ${secretFlag}`)
  })
  return (
    <div className="App">
      <HeaderRenderer enableSecretHeader={secretFlag} secretSetter={secretSetter} owner="Revfran" />
      <Main awesomeList={awesomeListObj} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
