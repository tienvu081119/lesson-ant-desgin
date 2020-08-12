import { TAB_CHANGE, TAB_ADD } from "../actionTypes";

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
 
  switch (action.type) {   
    case TAB_CHANGE:{
      state.activeKey = action.activeKey;
      return {...state};
    }
    case TAB_ADD:{ 
       const {panes} = state;
       const key = action.payload.tabName;
       panes.push({ title: 'New Tab', content: 'Content of new Tab', key: key });
       state.activeKey = key;
       return {...state};   
      
      
    }
    default:
      return state;
  }
};

export default tabMain;
