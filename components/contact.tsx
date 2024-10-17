"use client";
import React from "react";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

console.log(process.env.NEXT_PUBLIC_API_KEY + " hello world");
console.log(API_KEY + "Molto Bene");

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    if (!API_KEY) {
      console.error("API_KEY is not defined!");
      return;
    }
    formData.append("access_key", API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>Name: </p>
        <input type="text" name="name" required />
        <p>Email:</p> <input type="email" name="email" required />
        <p>Message</p> <textarea name="message" required></textarea>
        <br></br>
        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
