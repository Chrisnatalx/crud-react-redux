import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
	{
		id: "1",
		name: "Fernando",
		email: "PeterDoe@gmail.com",
		github: "Klerith",
	},
	{
		id: "2",
		name: "Leo",
		email: "Pingocho@gmail.com",
		github: "lmarello",
	},
	{
		id: "3",
		name: "Midudev",
		email: "Frank@gmail.com",
		github: "midudev",
	},
	{
		id: "4",
		name: "Christian Natale",
		email: "natale.christian.a@gmail.com",
		github: "Chrisnatalx",
	},
];

export type userId = string;
export interface User {
	name: string;
	email: string;
	github: string;
}
export interface UserWithId extends User {
	id: userId;
}

const initialState: UserWithId[] = (() => {
	const persistanceState = localStorage.getItem("__redux__state__");
	if (persistanceState) {
		return JSON.parse(persistanceState).users;
	}
	return DEFAULT_STATE;
})();

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<userId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
		addNewUser: (state, action: PayloadAction<User>) => {
			const id = crypto.randomUUID();
			state.push({ id, ...action.payload });
		},
		rollbackUser: (state, action: PayloadAction<UserWithId>) => {
			const isUserAlreadyDefined = state.some(
				(user) => user.id === action.payload.id,
			);
			if (!isUserAlreadyDefined) {
				state.push(action.payload);
			}
		},
	},
});

export default userSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = userSlice.actions;
