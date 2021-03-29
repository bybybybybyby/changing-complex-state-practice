import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    const formName = event.target.name;
    const newValue = event.target.value;

    setContact((prevContact) => {
      if (formName === "fName") {
        return {
          fName: newValue,
          lName: prevContact.lName,
          email: prevContact.email
        }
      } else if (formName === "lName") {
        return {
          fName: prevContact.fName,
          lName: newValue,
          email: prevContact.email
        }
      } else if (formName === "email") {
        return {
          fName: prevContact.fName,
          lName: prevContact.lName,
          email: newValue
        }
      }
      
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleChange} name="fName" placeholder="First Name" value={contact.fName}/>
        <input onChange={handleChange} name="lName" placeholder="Last Name" />
        <input onChange={handleChange} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
