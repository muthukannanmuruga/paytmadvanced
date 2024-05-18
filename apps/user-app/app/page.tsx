// src/App.js

"use client";
import React from 'react';
import { useBalance } from "@repo/store/useBalance";

function App() {
  const balance = useBalance();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hi there {balance}</h1>
    </div>
  );
}

export default App;
