import { ActionTypesList, TListAction, TItem, Status } from '../actions/ListAction';

const initialState = {
	list: []
};

const listReducer = (state = initialState, action: TListAction) => {
	switch (action.type){
	case ActionTypesList.AddItem: {
		const newList = [
			...state.list,
			action.payload.item
		];
		return {
			list: newList
		};
	}
	case ActionTypesList.ChangeStatus: {
		const itemList = state.list[action.payload.index as number] as TItem;
		const actualStatus = itemList.status;
		const newItemList = {
			...itemList,
			status: actualStatus === Status.TODO ? Status.DONE : Status.TODO
		};
		const newList = [
			...state.list.slice(0, action.payload.index as number),
			newItemList,
			...state.list.slice(action.payload.index as number + 1)
		];
		return {
			list: newList
		};
	}
	case ActionTypesList.DeleteItem: {
		const newList = [
			...state.list.slice(0, action.payload.index as number),
			...state.list.slice(action.payload.index as number + 1)
		];
		return {
			list: newList
		};
	}
	default:
		return state;
	}
};

export default listReducer;
