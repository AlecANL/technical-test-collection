import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserWithId, userId } from "../../models/user";

export const initialState: UserWithId[] = [
	{
		id: "1",
		name: "Yazman Rodriguez",
		email: "yazmanito@gmail.com",
		github: "yazmanito",
	},
	{
		id: "2",
		name: "John Doe",
		email: "jhon@email.com",
		github: "jhon",
	},
	{
		id: "3",
		name: "Jane Doe",
		email: "jane@email.com",
		github: "jane",
	},
];

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		deleteUserById: (state, action: PayloadAction<userId>) => {
			const { payload } = action;
			return state.filter((user) => user.id !== payload.id);
		},
	},
});

export default userSlice.reducer;
export const { deleteUserById } = userSlice.actions;
