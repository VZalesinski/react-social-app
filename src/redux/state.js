let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 1, message: "Hi there!", likesCount: 3 },
        { id: 2, message: "Wat da dog doin?!", likesCount: 69 },
      ],
      newPostText: "Hello",
    },

    dialogsPage: {
      dialogsData: [
        { id: 1, name: "Rex" },
        { id: 2, name: "Sharik" },
        { id: 3, name: "Cat" },
        { id: 4, name: "Dog" },
        { id: 5, name: "Peter" },
        { id: 6, name: "Alex" },
      ],

      messageData: [
        { id: 1, message: "OOOF" },
        { id: 2, message: "Gav-Gav" },
        { id: 3, message: "wat da dog doin???" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("state was changed");
  },
  addPostToState() {
    let newPost = {
      id: this._state.profilePage.postData.length + 1,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },
  updateNewText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._statetate);
  },
  dispatch(action) {},
};
export default store;
window.store = store;
