import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

interface ResultData {
  name_eng: string;
  name_kor: string;
  description: string;
}

export const useGetTestResult = (): [ResultData] => {
  const [resultData, setResultData] = useState<ResultData>({
    name_eng: "",
    name_kor: "",
    description: ""
  });
  const location = useLocation();

  const getResultData = async (filename: string) => {
    try {
      const response = await axios.get(`/data/${filename}.json`);
      setResultData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let filename = "";
    switch (location.pathname.split("/")[2]) {
      case "0":
      case "1":
        filename = "result_a1";
        break;
      case "2":
        filename = "result_a2";
        break;
      case "3":
        filename = "result_a3";
        break;
      case "4":
      case "5":
        filename = "result_a4";
        break;
    }

    getResultData(filename);
  }, []);

  return [resultData];
};
