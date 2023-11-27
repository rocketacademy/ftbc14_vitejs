import { useState, useEffect } from "react";

export default function Form() {
  const [formInformation, setFormInformation] = useState({
    fullName: "",
    email: "",
    age: 0,
    accountDescription: "",
    class: null,
  });

  const updateState = (event) => {
    // console.log(event);
    let name = event.target.name;
    let value = event.target.value;
    console.log(name, value);

    // if (name == "fullName") {
    //   setFormInformation({
    //     fullName: value,
    //     email: formInformation.email,
    //     age: formInformation.age,
    //     class: formInformation.class,
    //   });
    // }

    setFormInformation((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  // [] empty dependency array = only run on mount
  useEffect(() => {
    console.log(formInformation);
  }, []);

  // [formInformation]  dependency array = only run on formInformation update
  useEffect(() => {
    console.log(formInformation);
  }, [formInformation]);

  const [accounts, setAccounts] = useState([]);

  const handleAccountCreation = (e) => {
    e.preventDefault();
    const account = {
      fullName: formInformation.fullName,
      email: formInformation.email,
      age: formInformation.age,
      accountDescription: formInformation.accountDescription,
      class: formInformation.class,
    };

    let newAccountsArray = [...accounts];
    newAccountsArray.push(account);

    setAccounts(newAccountsArray);

    setFormInformation({
      fullName: "",
      email: "",
      age: 0,
      accountDescription: "",
      class: null,
    });
  };

  return (
    <div>
      <h1>Account Creation</h1>
      <form onSubmit={handleAccountCreation}>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formInformation.email}
          placeholder="Add Email here"
          onChange={(event) => updateState(event)}
        />
        <br />
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={formInformation.fullName}
          placeholder="Add Full Name here"
          onChange={(event) => updateState(event)}
        />
        <br />
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formInformation.age}
          onChange={(event) => updateState(event)}
        />
        <br />
        <label>Account Description:</label>
        <textarea
          name="accountDescription"
          value={formInformation.accountDescription}
          onChange={(event) => updateState(event)}
          rows="10"
          cols="100"
        >
          Add your Account Description here
        </textarea>
        <br />
        <label>Class:</label>
        <select name="class" onChange={(event) => updateState(event)}>
          <option value="ftbc12">FTBC12</option>
          <option value="ftbc13">FTBC13</option>
          <option value="ftbc14">FTBC14</option>
        </select>
        <br />
        <input type="submit" value="submit" />
      </form>

      <h4>Account information</h4>
      <h6>{formInformation.fullName}</h6>
      <h6>{formInformation.email}</h6>
      <h6>{formInformation.age}</h6>
      <h6>{formInformation.accountDescription}</h6>
      <h6>{formInformation["class"]}</h6>

      <h1>Accounts:</h1>

      {accounts && accounts.length > 0 ? (
        accounts.map((account, index) => {
          return (
            <div key={account.name + index}>
              <h3>{account.fullName}</h3>
              <h4>{account.email}</h4>
              <h6>{account.age}</h6>
              <h6>{account.accountDescription}</h6>
              <h6>{account.class}</h6>
            </div>
          );
        })
      ) : (
        <p>No Accounts yet, please make an account</p>
      )}
    </div>
  );
}
