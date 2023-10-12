/* List */
export type TList = {
    list: TItem[]
}

export interface IListPayload {
    index?: number
    item?: TItem
}

export type TItem = {
    name: string,
    status: Status
}

export enum Status {
    TODO = 'TODO',
    DONE = 'DONE'
}

export interface IAddItemToList {
    type: ActionTypesList.AddItem
    payload: IListPayload
}

export interface IChangeStatus {
    type: ActionTypesList.ChangeStatus
    payload: IListPayload
}

export interface IDeleteItemToList {
    type: ActionTypesList.DeleteItem
    payload: IListPayload    
}

export enum ActionTypesList {
    AddItem = 'ADD_ITEM',
    ChangeStatus = 'CHANGE_STATUS',
    DeleteItem = 'DELETE_ITEM'
}

export type TListAction = {
    type: ActionTypesList
    payload: IListPayload
}

const addItem = (payload: IAddItemToList) => ({
	type: ActionTypesList.AddItem,
	payload
});

const changeStatus = (payload: IChangeStatus) => ({
	type: ActionTypesList.ChangeStatus,
	payload
});

const listActions = {
	addItem,
	changeStatus
};
/* List */



export default listActions;
