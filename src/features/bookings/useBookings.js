import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";

// We want the bookings filter renders on Server-side, not like the cabins filter that renders on Client-side
export function useBookings() {
  const [searchParams] = useSearchParams();

  // FILTER
  const filterValue = searchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };
  //  { field: "totalPrice", value: 5000, method: "gte" };

  const {
    isLoading,
    data: bookings,
    error,
  } = useQuery({
    queryKey: ["bookings", filter], // As the dependency of useEffect
    queryFn: () => getBookings({ filter }),
  });

  return { isLoading, bookings, error };
}
