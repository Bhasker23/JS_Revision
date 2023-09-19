import "./App.css";
import Navbar from "./component/e-commerce/Navbar/Navbar";
import ProductList from "./component/e-commerce/ProductList/ProductList";

// import Child1 from "./component/Child1";
// import Child2 from "./component/Child2";
// import CreateNote from "./notes/CreateNote";
// import ListNote from "./notes/ListNote";

function App() {
  return (
    <div className="App">
      {/* <h1>Hello</h1> */}
      {/* <Child1 />
      <Child2 />
      <h1>Practice</h1>
      <CreateNote />
      <ListNote /> */}
      <Navbar />
      <ProductList />
    </div>
  );
}

export default App;
