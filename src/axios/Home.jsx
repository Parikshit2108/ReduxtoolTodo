import React, { useEffect } from "react";
import instance from "./Axiosinstances";

export default function Home() {
  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = async () => {
    let response = await instance({
      url: "products",
      method: "post",
      header: {},
      statusText: "fetched succesfully",
    });
    console.log(response);
    // try {
    //   await instance({
    //     // url of the api endpoint (can be changed)
    //     url: "posts",
    //     method: "GET",
    //   }).then((res) => {
    //     // handle success
    //     console.log(res);
    //   });
    // } catch (e) {
    //   // handle error
    //   console.error(e);
    // }
  };

  instance.interceptors.request.use(
    (config) => {
      console.log(config);
      console.log("request Sent Successfully");

      // return config;
    },
    (error) => {
      console.log(error.message);
    }
  );

  instance.interceptors.response.use(
    (res) => {
      console.log("fetched successfully ");
      console.log(res);
      // return res;
    },
    (error) => {
      console.log(error.message);
    }
  );

  return <div></div>;
}
