import { deleteUserById, userId } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserAction = () => {
	const dispatch = useAppDispatch();

	const removeUser = (id: userId) => {
		dispatch(deleteUserById(id));
	};
	return { removeUser };
};
