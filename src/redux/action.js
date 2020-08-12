import {TAB_CHANGE, TAB_ADD} from './actionTypes';

export const onChange = activeKey => ({
    type: TAB_CHANGE,
    payload: {activeKey}
})

export const onAdd = tabName =>({
    type: TAB_ADD,
    payload:{ tabName}
})
