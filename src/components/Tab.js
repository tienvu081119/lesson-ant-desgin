import React from "react";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import { getTabMains } from "../redux/selectors";
import { useDispatch } from 'react-redux';
import { onChange } from '../redux/action';

const { TabPane } = Tabs;

const Tab = () => {
  const { panes, activeKey }= useSelector(getTabMains);   
  const dispath = useDispatch();
  return (
    <Tabs
      hideAdd
      type="editable-card"
      activeKey={activeKey}
      onChange={()=>dispath(onChange(activeKey))}
    >
      {panes.map((pane) => (
        <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
          {pane.content}
        </TabPane>
      ))}
    </Tabs>
  );
};


// const { TabPane } = Tabs;

// const initialPanes = [
//   { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
//   { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
//   {
//     title: 'Tab 3',
//     content: 'Content of Tab 3',
//     key: '3',
//     closable: false,
//   }
// ];

// class Tab extends React.Component {
//   newTabIndex = 0;

//   state = {
//     activeKey: initialPanes[0].key,
//     panes: initialPanes,
//   };

//   onChange = activeKey => {    
//     this.setState({ activeKey });
//   };

//   onEdit = (targetKey, action) => {
//     this[action](targetKey);
//   };

//   add = () => {
//     const { panes } = this.state;
//     const activeKey = `newTab${this.newTabIndex++}`;
//     const newPanes = [...panes];
//     newPanes.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey });
//     this.setState({
//       panes: newPanes,
//       activeKey,
//     });
//   };

//   remove = targetKey => {
//     const { panes, activeKey } = this.state;
//     let newActiveKey = activeKey;
//     let lastIndex;
//     panes.forEach((pane, i) => {
//       if (pane.key === targetKey) {
//         lastIndex = i - 1;
//       }
//     });
//     const newPanes = panes.filter(pane => pane.key !== targetKey);
//     if (newPanes.length && newActiveKey === targetKey) {
//       if (lastIndex >= 0) {
//         newActiveKey = newPanes[lastIndex].key;
//       } else {
//         newActiveKey = newPanes[0].key;
//       }
//     }
//     this.setState({
//       panes: newPanes,
//       activeKey: newActiveKey,
//     });
//   };

//   render() {
//     const { panes, activeKey } = this.state;
//     console.log(activeKey);
//     return (
//       <Tabs
//         type="editable-card"
//         onChange={this.onChange}
//         activeKey={activeKey}
//         onEdit={this.onEdit}
//       >
//         {panes.map(pane => (
//           <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>
//             {pane.content}
//           </TabPane>
//         ))}
//       </Tabs>
//     );
//   }
// }

export default Tab;
