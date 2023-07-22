export interface User {
	name: string;
	email: string;
	github: string;
}

export interface UserWithId extends User {
	id: string;
}

export type userId = Pick<UserWithId, "id">;

export const ACTION_TYPES_USER = {
	ADD_USER: "ADD_USER",
	DELETE_USER: "DELETE_USER",
} as const;

export type UserAction = keyof typeof ACTION_TYPES_USER;

export type ActionType = { type: UserAction; payload: userId };
