import { TAB_CHANGE, TAB_ADD } from "../actionTypes";
import routeTabs from '../routes/routeTabs';

const combonentTab = (key) => routeTabs.find(routeTab=>routeTab.key == key);

const defaultState = {
  activeKey: "1",
  panes: [
    { title: "Tab 1", content: "Content of Tab 1", key: "1", closable: false} 
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
       const key = action.payload.tabKey;
       const title = action.payload.tabTitle;
       let content= combonentTab(key); 
       panes.push({ title: title, content: content.main(), key: key });
       state.activeKey = key;       
       return {...state}; 
    }
    default:
      return state;
  }
};

export default tabMain;
