import { useEffect, useState } from "react";

import NewsSingle from "./NewsSingle";

const NewsPaper = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json").then((reg) => reg.json().then((data) => setNews(data)));
  }, []);
  return (
    <div>
      news:{news.length}
      {news.map((newsSingle) => {newsSingle.rating})}
    </div>
  );
};

export default NewsPaper;
