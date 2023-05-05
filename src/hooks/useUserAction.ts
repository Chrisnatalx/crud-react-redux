import { addNewUser, deleteUserById, userId } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserAction = () => {
	const dispatch = useAppDispatch();
	const addUsers = ({ name, email, github }) => {
		dispatch(addNewUser({ name, email, github }));
	};
	const removeUser = (id: userId) => {
		dispatch(deleteUserById(id));
	};

	return { removeUser, addUsers };
};
