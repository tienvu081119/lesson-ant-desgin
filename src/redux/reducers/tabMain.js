import { TAB_CHANGE, TAB_ADD, TAB_REMOVE } from "../actionTypes";
import routeTabs from "../routes/routeTabs";

const componentTab = (key) => routeTabs.find((routeTab) => routeTab.key == key);

let getActiveKey =(panes,id) =>{    
   let result = -1;
   let index = id - 1;
   result = panes.find(x=>x.id == index);
   return result;
}

let getNextId =(panes)=>{
  if (panes.length === 0) {
    return 1;
  }
  let ids = panes.map(pane => pane.id);
  return Math.max(...ids) + 1;
}

let findPanes = (panes, key) => {  
  let result = -1;
  result = panes.findIndex((x) => x.key === key);
  return result;
};

const defaultState = {
  activeKey: "dashBoardHome",
  panes: [
    {
      id: 0,
      title: "Home",
      content: routeTabs[0].component(),
      key: "dashBoardHome",
      closable: false,
    },
  ],
};

const tabMain = (state = defaultState, action) => {
  console.log(state);
  switch (action.type) {    
    case TAB_CHANGE: {
      state.activeKey = action.activeKey;
      return { ...state };
    }
    case TAB_ADD: {
      const { panes } = state;
      const key = action.payload.tabKey;
      const title = action.payload.tabTitle;
      let content = componentTab(key);
      let arrayPanes = findPanes(panes, key);
      if (arrayPanes == -1) {
        panes.push({ id: getNextId(panes), title: title, content: content.component(), key: key });
      }
      state.activeKey = key;
      return { ...state };
    }

    case TAB_REMOVE :{       
      const { panes } = state;        
      const key = action.payload.activeKey;
      let itemPanes = findPanes(panes, key);
      let activeKey = getActiveKey(panes,itemPanes);
      state.activeKey = activeKey.key;
      panes.splice(itemPanes,1);  
      return { ...state };
    }

    default:
      return state;
  }
};

export default tabMain;
