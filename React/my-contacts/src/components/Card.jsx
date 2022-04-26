import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

export default function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          {/* <h2>{props.id}</h2> */}
          <h2 className="name">{props.name}</h2>
          <Avatar img={props.img} />
        </div>
        <div className="bottom">
          <Details detailInfo={props.tel} />
          <Details detailInfo={props.email} />
        </div>
      </div>
    </div>
  );
}
