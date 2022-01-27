import React from "react";
import style from "./MyPost.module.css";
import Post from "./Posts/Post";

const MyPost = (props) => {
  let postElement = props.postData.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  let TextAreaRef = React.createRef();
  let addPost = () => {
    props.addPostToState();
  };

  let onChangePost = () => {
    let text = TextAreaRef.current.value;
    props.updateNewText(text);
  };
  return (
    <div className={style.container}>
      <div className={style.textareaItem}></div>
      <h3> New Post</h3>
      <textarea
        ref={TextAreaRef}
        value={props.newPostText}
        onChange={onChangePost}
      />
      <button onClick={addPost}>Add Post</button>
      <button>Remove</button>
      {postElement}
    </div>
  );
};

export default MyPost;
