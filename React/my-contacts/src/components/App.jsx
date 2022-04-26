import React from "react";
import contacts from "../contacts";
import Avatar from "./Avatar";
import Card from "./Card";

function createCard(contact) {
  return (
    <Card
      id={contact.id}
      key={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

export default function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://darshanghorpade.github.io/cv/images/darshan.png" />

      {/* map loops through array contacts and calls createCard for each object in array  */}
      {contacts.map(createCard)}
    </div>
  );
}
