import React from "react";
import style from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  let dialogElement = props.dialogsPage.dialogsData.map((element) => (
    <DialogItem name={element.name} id={element.id} />
  ));

  let messageElement = props.dialogsPage.messageData.map((message) => (
    <MessageItem message={message.message} id={message.id} />
  ));

  return (
    <>
      <div className={style.dialogs}>
        <div className={style.dialogList}>{dialogElement}</div>
        <div className={style.messageList}>{messageElement}</div>
      </div>
    </>
  );
};

export default Dialogs;
