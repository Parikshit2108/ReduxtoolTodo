import axios from "axios";
import { useEffect, useState } from "react";
// const url = "https://swapi.dev/api/planets";
export const useFetch = (url) => {
  const [data, setData] = useState();
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, [url]);
  return data;
};
