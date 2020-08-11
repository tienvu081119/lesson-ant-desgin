import {TAB_CHANGE} from './actionTypes';

export const onChange = activeKey => ({
    type: TAB_CHANGE,
    payload: {activeKey}
})