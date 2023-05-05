import { createSlice } from "@reduxjs/toolkit";

export interface User {
	name: string;
	email: string;
	github: string;
}
export interface UserWithId extends User {
	id: string;
}

const initialState: UserWithId[] = [
	{
		name: "fernando",
		email: "PeterDoe@gmail.com",
		github: "fernandoherrera",
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
	reducers: {},
});

export default userSlice.reducer;
