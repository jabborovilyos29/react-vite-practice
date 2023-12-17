import React, { createContext, useState } from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/Main/MainContent";

export const inputText = createContext();

export default function App() {
  const [text, setText] = useState("");

  return (
    <inputText.Provider value={[text, setText]}>
      <Header />
      <MainContent />
    </inputText.Provider>
  );
}
