import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending: isLogingOut } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      // For security, remove all information store the React Query cache while we logout
      queryClient.removeQueries();
      navigate("/login", { replace: true });
    },
  });

  return { logout, isLogingOut };
}
