import { useCallback, useEffect, useState } from "react";
import fetch from "isomorphic-unfetch";

const useData = () => {
  const [dataAPI, setDataAPI] = useState(null);

  async function getData(value) {
    const res = await fetch(`http://localhost:3000/api/indicadores`);
    const data = await res.json();
    setDataAPI(data);
  }

  useEffect(() => {
    getData(dataAPI);
  }, []);

  return { dataAPI, setDataAPI };
};

export default useData;
