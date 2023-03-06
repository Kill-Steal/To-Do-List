import { createContext, useReducer } from "react";

const Account = [
    {
        id: 1,
        email: 'ditthaphong.s@live.ku.th',
        name: 'Ditthaphong',
        phone: '0123456789',
        password: '123546',
    },
    {
        id: 2,
        email: 'someone@gmail.com',
        name: 'somebody',
        phone: '0987415632',
        password: '987456',
    },
];

const ToDoList =[
    {
        id: 1,
        title: 'ทำการบ้าน',
        date: new Date(2023, 2, 6, 21, 30),
        category: 2,
        check: false
    },
    {
        id: 2,
        title: 'เข้านอน',
        date: new Date(2023, 2, 6, 23, 0),
        category: 2,
        check: false
    },
    {
        id: 3,
        title: 'เล่นเกม',
        date: new Date(2023, 2, 6, 14, 0),
        category: 0,
        check: false
    },
]

export const AccountContext = createContext({
    account: [],
    toDoList: [],
    addAccount: ({ email, password, name, phone }) => {},
    updateAccount: (id, { email, password, name, phone }) => {},
    createList: ({ title, date, category }) => {},
    editList: (id, { title, date, category }) => {},
    checkList: (id) => {},
})

function accountReducer(state, action) {
    switch(action.type) {
        case 'ADD':
            const accountId = Account[Account.length - 1].id + 1;
            return [{...action.payload, id: accountId}, ...state];
        case 'UPDATE':
            const updatableAccountIndex = state.findIndex(
                (account) => account.id === action.payload.id
            );
            const updatableAccount = state[updatableAccountIndex];
            const updatedItem = {...updatableAccount, ...action.payload.data};
            const updatedAccount = [...state];
            updatedAccount[updatableAccountIndex] = updatedItem;
            return updatedAccount;
        default:
            return state;
    }
}

function toDoListReducer(state, action) {
    switch(action.type) {
        case 'CREATE':
            const listId = ToDoList[ToDoList.length - 1].id + 1;
            return [{...action.payload, id: listId}, ...state];
        case 'EDIT':
            const updatableToDoListIndex = state.findIndex(
                (toDoList) => toDoList.id === action.payload.id
            );
            const updatableToDoList = state[updatableToDoListIndex];
            const updatedItem = {...updatableToDoList, ...action.payload.data};
            const updatedToDoList = [...state];
            updatedToDoList[updatableToDoListIndex] = updatedItem;
            return updatableToDoList;
        case 'CHECK':
            const checkToDoListIndex = state.findIndex(
                (toDoList) => toDoList.id === action.payload.id
            );
            const checkToDoList = state[checkToDoListIndex];
            checkToDoList.id = true;
            const checkedToDoList = [...state];
            checkedToDoList[checkToDoList] = checkToDoList;
            return checkedToDoList;
        default:
            return state;
    }
}

function AccountContextProvider({ children }) {
    const [accountState, dispatchAccount] = useReducer(accountReducer, Account);
    const [toDoListState, dispatchToDoList] = useReducer(toDoListReducer, ToDoList);

    function addAccount(accountData){
        dispatchAccount({ type: 'ADD', payload: accountData });
    }

    function updateAccount(id, accountData){
        dispatchAccount({ type:'UPDATE', payload: {id: id, data: accountData} });
    }

    function createList(listData){
        dispatchToDoList({ type:'CREATE', payload: listData });
    }

    function editList(id, listData){
        dispatchToDoList({ type:'EDIT', payload: {id: id, data: listData} });
    }

    function checkedList(id){
        dispatchToDoList({ type:'CHECK', payload: id});
    }

    const value = {
        account: accountState,
        addAccount: addAccount,
        updateAccount: updateAccount,
        createList: createList,
        editList: editList,
        checkedList: checkedList,
    }

    return (
        <AccountContext.Provider value={value}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountContextProvider;