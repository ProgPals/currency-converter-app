import { Spinner, Text } from "@chakra-ui/react";
import { useCurrency } from "../common/hooks/useCurrency";

const Converter = () => {
  const {
    isLoading,
    isError,
    amount,
    setAmount,
    currencyOne,
    currencyTwo,
    setCurrencyOne,
    setCurrencyTwo,
    currencyList,
    covertedAmount,
    ratesData,
    symbolsData,
    date,
    time,
  } = useCurrency();

  if (isError)
    return (
      <Text fontWeight="bold" fontSize="3xl" color="white" my="10">
        Something has gone terribly wrong
      </Text>
    );

  if (isLoading)
    return (
      <Spinner
        margin="auto 0"
        size="xl"
        thickness="4px"
        speed="0.65s"
        color="purple.500"
        emptyColor="purple.200"
      />
    );

  return (
    <>
      <>{amount}</>
      <>{currencyOne}</>
      <>{currencyTwo}</>
    </>
  );
};

export default Converter;
