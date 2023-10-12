import React, { useState } from 'react';
import { connect } from 'react-redux';
import { TItem, ActionTypesList, Status } from '../actions/ListAction';
import 'react-list-ui-library/dist/index.css';
import { ContainerList, List } from 'react-list-ui-library';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ListComponent = ({ list, addItem, changeStatus, deleteItem }: {list: TItem[], addItem: (item: TItem) => any, changeStatus: (index: number) => any, deleteItem: (index: number) => any }) => {

	const [itemName, setItemName] = useState<string>('');

	const onClickAddItem = () => {
		const item: TItem = {
			name: itemName,
			status: Status.TODO
		};
		if(itemName !== ''){
			addItem(item);
			setItemName('');
		}else{
			alert('Please, insert a name');
		}
	};

	const onChangeInput = (e) => {
		setItemName(e.target.value);
	};

	const handleChangeState = (index) => {
		changeStatus(index);
	};
	
	const onClickRemoveItem = (index) => {
		deleteItem(index);
	};

	return(
		<div className="App">
			<ContainerList title='List App'>
				<List 
					list={list}
					valueInput={itemName}
					placeholderInput='Insert a name of a new item'
					onChangeInput={onChangeInput}
					onClickAddItem={onClickAddItem}
					onClickRemoveItem={onClickRemoveItem}
					handleChangeState={handleChangeState}
				/>
			</ContainerList>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		list: state.listReducer.list
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addItem: (item: TItem) => dispatch({ type: ActionTypesList.AddItem, payload: { item: item } }),
		changeStatus: (index: number) => dispatch({ type: ActionTypesList.ChangeStatus, payload: { index: index } }),
		deleteItem: (index: number) => dispatch({ type: ActionTypesList.DeleteItem, payload: { index: index } })
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ListComponent);
