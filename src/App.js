import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummary from "./components/OrderSummary";
import NoMatch from "./components/Error404";
import { ErrorBoundary } from "./components/ErrorBoundary";
import Products from "./components/Products";
import Users from "./components/Users";
import FeatureProducts from "./components/FeatureProducts";
import NewProducts from "./components/NewProducts";
import { useState } from "react";
import useFetch from "./components/useFetch";

function App() {
  const [page, setPage] = useState(1);
  const { loading, error, data } = useFetch(
    `https://randomuser.me/api/?page=${page}&results=10&seed=abc`
  );
  
  console.log({ loading, error, data });

  
  const PER_PAGE = 5;
  
  const total = data?.results?.length;
  
  const pages = 50;
   
  const skip = page * PER_PAGE - PER_PAGE;
  
  if (loading) {
    return <>Loading...</>;
  }

  if (!loading && error) {
    return <>Error</>;
  }

  return (
    <div className="App">


      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="users" element={<Users />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
        <Route path="products" element={<Products />}>
          <Route path="feature" element={<FeatureProducts />}></Route>
          <Route path="new" element={<NewProducts />}></Route>
        </Route>
      </Routes>
      <h1 className="title">List of Users</h1>
      
      {data?.results
        
        .map((each, index) => {
          const name = `${each.name.title} ${each.name.first} ${each.name.last}`;
          return (
            <li key={name.toLowerCase().replaceAll(" ", "")}>{`${
              index + 1
            }.${name}`}</li>
          );
        })}
      {
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          prev
        </button>
      }
      <p className="pagination">
        Pages: {page} of {pages}
      </p>
      {
        <button
          disabled={page >= pages}
          aria-disabled={page >= pages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          next
        </button>
      }
      
      {Array.from({ length: pages }, (value, index) => index + 1).map(
        (each) => (
          <button onClick={() => setPage(each)}>{each}</button>
        )
      )}
    </div>
    
  );
         

}


export default App;
