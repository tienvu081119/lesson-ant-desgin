import React from "react";
import { Menu } from "antd";
import { useDispatch } from "react-redux";
import { onAdd } from "../redux/action";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";


const { SubMenu } = Menu;

const Nav = () => {

  const dispatch = useDispatch();
  return (   
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="userHome" icon={<AppstoreOutlined />} onClick={(e) =>dispatch(onAdd(e.key,"User"))}>
        User
      </Menu.Item>
      <Menu.Item key="customerHome" icon={<AppstoreOutlined />} onClick={(e) =>dispatch(onAdd(e.key,"Customer"))}>
        Customer
      </Menu.Item>
      <Menu.Item key="3" icon={<AppstoreOutlined />}>
        nav 3
      </Menu.Item>
    </Menu>   
  );
};

export default Nav;
// class Nav extends React.Component {
//   state = {
//     current: "mail",
//   };

//   handleClick = (e) => {
//     console.log("click ", e);
//     this.setState({ current: e.key });
//   };

//   render() {
//     const { current } = this.state;
//     return (
//       <Menu theme="dark" mode="horizontal">
//         <Menu.Item key="1" icon={<AppstoreOutlined />}>nav 1</Menu.Item>
//         <Menu.Item key="2" icon={<AppstoreOutlined />}>nav 2</Menu.Item>
//         <Menu.Item key="3" icon={<AppstoreOutlined />}>nav 3</Menu.Item>
//         <Menu.Item key="mail" icon={<MailOutlined />}>
//           Navigation One
//         </Menu.Item>
//         <Menu.Item key="app" icon={<AppstoreOutlined />}>
//           Navigation Two
//         </Menu.Item>
//         <SubMenu icon={<SettingOutlined />} title="Navigation Three - Submenu">
//           <Menu.ItemGroup title="Item 1">
//             <Menu.Item key="setting:1">Option 1</Menu.Item>
//             <Menu.Item key="setting:2">Option 2</Menu.Item>
//           </Menu.ItemGroup>
//           <Menu.ItemGroup title="Item 2">
//             <Menu.Item key="setting:3">Option 3</Menu.Item>
//             <Menu.Item key="setting:4">Option 4</Menu.Item>
//           </Menu.ItemGroup>
//         </SubMenu>
//       </Menu>
//     );
//   }
// }

// export default Nav;
