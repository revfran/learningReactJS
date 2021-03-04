import './App.css';

function Header(props) {
  return (<header><h1>"Learn React, by {props.owner}"</h1></header>)
}

function Main() {
  return (<section><p>This is just the body of the page</p></section>)
}

function Footer(props) {
  return (<footer><p>It's cool to have a footer in place.</p><p>Copyright {props.year}</p></footer>)
}

function App() {
  return (
    <div className="App">
      <Header owner="revfran"/>
      <Main />
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
