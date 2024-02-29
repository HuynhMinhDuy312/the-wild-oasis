import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";

export const useLogin = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({ email, password }) => loginApi({ email, password }),
        onSuccess: (user) => {
            queryClient.setQueryData(["user"], user.user);
            navigate("/", { replace: true });
        },
        onError: (err) => {
            console.log("ERROR", err);
            toast.error("Provided email or password are incorrect");
        },
    });

    return { login, isLoading };
};
