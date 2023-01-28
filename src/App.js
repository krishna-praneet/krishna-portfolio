import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return (
    <div class="container-fluid">
      <Header />
      <section>
        <Content />
      </section>
    </div>
  );
}

export default App;
