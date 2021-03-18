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
const awesomeListObj = awesomeList.map((awesomeListItem, index) => ({key: index, value: awesomeListItem}))

function Main(props) {
  return (
  <section>
    <p>This is just the body of the page</p>
    <img src="https://github.com/revfran.png" height={200} alt="revfran github"></img>
    <ul>
      {props.awesomeList.map((awesomeListItemObj) => (<li key={awesomeListItemObj.key}>{awesomeListItemObj.value}</li>))}
    </ul>
  </section>)
}

function Footer(props) {
  return (<footer><p>It's cool to have a footer in place.</p><p>Copyright {props.year}</p></footer>)
}

function HeaderRenderer({ enableSecretHeader, owner }) {
 return (<>{
  enableSecretHeader ? <SecretHeader owner={owner} /> : <Header owner={owner}/>
 }
 </>);
}

function App() {
  return (
    <div className="App">
      <HeaderRenderer enableSecretHeader={false} owner="Revfran"/>
      <Main awesomeList={awesomeListObj}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
