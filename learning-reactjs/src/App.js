import './App.css';

function Header() {
  return (<header><h1>"Learn React, by Revfran"</h1></header>)
}

function Main() {
  return (<section><p>This is just the body of the page</p></section>)
}

function Footer() {
  return (<footer><p>It's cool to have a footer in place</p></footer>)
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
