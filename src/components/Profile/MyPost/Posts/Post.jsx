import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div>
      <img
        src="https://pm1.narvii.com/7135/3164063103dbbc6434c56adeddbc9e7c19b612d7r1-689-850v2_hq.jpg"
        alt=""
        className={style.img__avatar}
      />
      <p>{props.message}</p>
      <p>Like: {props.likesCount}</p>
    </div>
  );
};

export default Post;
