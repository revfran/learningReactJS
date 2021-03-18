import './App.css';

function Header(props) {
  return (<header><h1>"Learn React, by {props.owner}"</h1></header>)
}

function SecretHeader(props) {
  return (<header><h1>"Congrats, {props.owner}. You unlocked the secretHeader"</h1></header>)
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

function HeaderRenderer(props) {
 return (<>{
  props.enableSecretHeader ? <SecretHeader owner={props.owner} /> : <Header owner={props.owner}/>
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
