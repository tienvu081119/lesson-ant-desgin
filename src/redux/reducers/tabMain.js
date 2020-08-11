import { TAB_CHANGE } from "../actionTypes";

const defaultState = {
  activeKey: "1",
  panes: [
    { title: "Tab 1", content: "Content of Tab 1", key: "1" },
    { title: "Tab 2", content: "Content of Tab 2", key: "2" },
    {
      title: "Tab 3",
      content: "Content of Tab 3",
      key: "3",
      closable: false,
    },
  ],
};
const tabMain = (state = defaultState, action) => {
  console.log(action.type);
  switch (action.type) {   
    case TAB_CHANGE:{
      state.activeKey = action.activeKey;
      return {...state};
    }
    default:
      return state;
  }
};

export default tabMain;
