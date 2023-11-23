import { useState, useEffect } from "react";

export default function Form() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <div>
      <label>Email:</label>
      <input
        type="text"
        value={email}
        placeholder="Add Email here"
        onChange={(event) => setEmail(event.target.value)}
      />
      <p>{email}</p>
    </div>
  );
}
