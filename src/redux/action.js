import {TAB_CHANGE, TAB_ADD, TAB_REMOVE} from './actionTypes';

export const onChange = activeKey => ({
    type: TAB_CHANGE,
    payload: {activeKey}
})

export const onRemove = activeKey => ({
    type: TAB_REMOVE,
    payload: {activeKey}
})

export const onAdd = (tabKey,tabTitle) =>({
    type: TAB_ADD,
    payload:{ tabKey, tabTitle}
})



