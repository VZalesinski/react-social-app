import react from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <>
      <div className={style.img__header}></div>
      <div className={style.profile__container}>
        <div className={style.img__avatar}> </div>
        <div>
          <h1>Vlad Zalesinski</h1>
        </div>
      </div>
    </>
  );
};

export default ProfileInfo;
