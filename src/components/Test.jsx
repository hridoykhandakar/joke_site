import { useState } from "react";
const jokes = [
  {
    id: 1,
    text: "I'm afraid for the calendar. Its days are numbered.",
  },
  {
    id: 2,
    text: "I used to be addicted to soap, but I'm clean now.",
  },
];
export default function Test() {
  return (
    <div>
      <strong>hello i a testing </strong>
      {jokes.map((joke) => (
        <p>{joke.text}</p>
      ))}
    </div>
  );
}
