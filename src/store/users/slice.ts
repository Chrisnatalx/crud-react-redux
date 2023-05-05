import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type userId = string;
export interface User {
	name: string;
	email: string;
	github: string;
}
export interface UserWithId extends User {
	id: userId;
}

const initialState: UserWithId[] = [
	{
		name: "fernando",
		email: "PeterDoe@gmail.com",
		github: "Klerith",
		id: "1",
	},
	{
		name: "Leo",
		email: "Dalas@gmail.com",
		github: "lmarello",
		id: "2",
	},
	{
		name: "Midudev",
		email: "Frank@gmail.com",
		github: "midudev",
		id: "3",
	},
	{
		name: "Christian Natale",
		email: "natale.christian.a@gmail.com",
		github: "Chrisnatalx",
		id: "4",
	},
];

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<userId>) => {
			const id = action.payload;
			return state.filter((user) => user.id !== id);
		},
	},
});

export default userSlice.reducer;

export const { deleteUserById } = userSlice.actions;
