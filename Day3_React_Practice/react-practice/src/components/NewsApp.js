import React, { useEffect, useRef, useState } from "react";
import News from "./News";
import "./NewsApp.css";

// cdea7ff0efd94906ba1d61d0e9260dc2
function NewsApp() {
  const apiKey = "cdea7ff0efd94906ba1d61d0e9260dc2";
  const [query, setQuery] = useState("tesla");
  const apiUrl = `https://newsapi.org/v2/everything?q=${query}&from=2023-07-07&sortBy=publishedAt&apiKey=${apiKey}`;

  const [newsList, setNewsList] = useState([]);

  let queryInputRef = useRef(null);

  useEffect(() => {
    fetchData();
  }, [query]);

  async function fetchData() {
    try {
      let respose = await fetch(apiUrl);
      let jsonData = await respose.json();

      setNewsList(jsonData.articles);
    } catch (e) {
      console.log(e, "error occoured");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    let queryInputValue = queryInputRef.current.value;
    setQuery(queryInputValue);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className="query-input" type="text" ref={queryInputRef} />
        <input
          className="btn-submit"
          onClick={handleSubmit}
          type="submit"
          value={"Submit"}
        />
      </form>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,30%)",
          justifyContent: "space-between",
          rowGap: "20px",
        }}
      >
        {newsList.map((news) => {
          return <News key={news.url} news={news} />;
        })}
      </div>
    </div>
  );
}

export default NewsApp;
