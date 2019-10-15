import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { LAUNCHPAD_LIST } from "../../graphql/launchpad.graphql";
import Spinner from "../atoms/Spinner";
const Launchpads = () => {
  const { data, loading, error } = useQuery(LAUNCHPAD_LIST);
  if (loading) return <Spinner />;
  if (error) return `error ${error.message}`;
  // Returns launchpad data
  console.log(data);
  return null;
};

export default Launchpads;
