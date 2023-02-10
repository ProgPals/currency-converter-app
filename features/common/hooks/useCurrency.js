import { useQueries } from "@tanstack/react-query";
import { useState } from "react";
import {
  fetchDate,
  fetchRates,
  fetchSymbols,
} from "../../converter/api/fetchData";

export const useCurrency = () => {
  const [amount, setAmount] = useState(25);
  const [currencyOne, setCurrencyOne] = useState("INR");
  const [currencyTwo, setCurrencyTwo] = useState("EUR");

  const [ratesData, symbolsData, date] = useQueries({
    queries: [
      {
        date: () => fetchDate("YYYY-MM-DD"),
      },
      {
        queryKey: ["rates", currencyOne],
        queryFn: () => fetchRates(currencyOne),
        staleTime: Infinity,
      },
      {
        queryKey: ["symbols"],
        queryFn: () => fetchSymbols,
        staleTime: Infinity,
      },
    ],
  });

  return { amount, currencyOne, currencyTwo };
};
