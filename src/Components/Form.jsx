import { useState } from "react";

export default function Form() {
  const [email, setEmail] = useState("");

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
