import React from 'react';
import DashBoardHome from '../../components/DashBoard/Home';
import UserHome from '../../components/User/Home';
import CustomerHome from '../../components/Customer/Home';

const array = [{
    key: 'dashBoardHome',
    component: () => <DashBoardHome />
},{
    key: 'userHome',
    component: ()=> <UserHome />
},{
    key: 'customerHome',
    component: () => <CustomerHome />
}]

export default array;