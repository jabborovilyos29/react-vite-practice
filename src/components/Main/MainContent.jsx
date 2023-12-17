import React, { useContext, useEffect, useState } from "react";
import { Increment } from "./Buttons/Increment";
import { Decrement } from "./Buttons/Decrement";
import { inputText } from "../../App";
import { IntervalCnt } from "./IntervalCnt/IntervalCnt";
import { useCounter } from "../../hooks/useCounter";
import { Card } from "./Card/Card";

export function MainContent() {
  const [value, setValue] = useState(1);
  const [number, setNumber] = useState(0);
  const [text, setText] = useContext(inputText);
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [cardInfo, setCardInfo] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
          setData(json), setFilteredData(json), console.log(json);
        });
    } catch (error) {
      console.log(error);
      setData(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // https://jsonplaceholder.typicode.com/users?id=

  const fetchUser = async (id) => {
    setLoading(true);
    try {
      await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`)
        .then((response) => response.json())
        .then((json) => {
          setCardInfo([...json]);
        });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const { increment, decrement, counter } = useCounter(value);

  const searchData = (value) => {
    setSearchValue(value);
    const newData = data.filter((item) => {
      return item.name.toLowerCase().includes(value.toLowerCase());
    });
    console.log(newData);
    setFilteredData(newData);
  };

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <input
        type="nummber"
        placeholder="input number..."
        value={value}
        onChange={(evt) => {
          setValue(Number(evt.target.value));
        }}
      />
      <div>
        <Increment increment={increment} />
        <Decrement decrement={decrement} />
      </div>

      {/* <IntervalCnt number={number} setNumber={setNumber} /> */}

      <div style={{ borderTop: "2px solid teal" }}>
        <h3>Your text: </h3>
        <input
          type="text"
          placeholder="input text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          border: "2px solid teal",
          margin: "10px 10px 10px 0",
          padding: "5px",
        }}
      >
        <h2>Search by name...</h2>
        <input
          type="text"
          className="search"
          placeholder="search..."
          value={searchValue}
          onChange={(e) => {
            searchData(e.target.value);
          }}
        />
      </div>
      <div className="container">
        {(loading && <h1>loading...</h1>) ||
          (cardInfo !== null && (
            <div className="cardInfo">
              <h2>Name: {cardInfo[0].name}</h2>
              <h2>Username: {cardInfo[0].username}</h2>
              <h2>Email: {cardInfo[0].email}</h2>
              <h2>Address: {cardInfo[0].address.street}</h2>
              <h2>Phone number: {cardInfo[0].phone}</h2>
              <button
                onClick={() => {
                  setCardInfo(null);
                }}
              >
                {" "}
                Go back
              </button>
            </div>
          )) ||
          filteredData?.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.name}
                username={item.username}
                email={item.email}
                id={item.id}
                fetchUser={fetchUser}
              />
            );
          }) || (
            <div className="retry__container">
              <h1>{data}</h1>
              <button onClick={fetchData} className="retry__button">
                &#8634;
              </button>
            </div>
          )}
      </div>
    </div>
  );
}
