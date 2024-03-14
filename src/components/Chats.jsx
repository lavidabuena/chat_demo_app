import React from "react";
import { Chat } from "./index";
import List from "@mui/material/List";

const Chats = (props) => {
  return (
    <List sx={{ width: "100%", maxWidth: 360 }}>
      <div>
        {props.chats.map((chat, index) => {
          return (
            <Chat text={chat.text} type={chat.type} key={index.toString()} />
          );
        })}
      </div>
    </List>
  );
};

export default Chats;
