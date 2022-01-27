import React from "react";
import MyPost from "./MyPost/MyPost";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <main>
      <ProfileInfo />
      <MyPost
        postData={props.profilePage.postData}
        newPostText={props.profilePage.newPostText}
        addPostToState={props.addPostToState}
        updateNewText={props.updateNewText}
      />
    </main>
  );
};

export default Profile;
