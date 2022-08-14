import React, { useState, useEffect } from "react";
export default function Home() {


  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/hello").then(
      res => res.json()
    ).then
      (d => {
        setData(d)
        console.log(d)
      })

  }, []);
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world
    </h1>
  )
}
