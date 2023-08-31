import axios from "axios";
import { IDataItem } from "../interfaces";
import { URL_GET_DATA } from "../utils/consts";

export const fetchData = async (
  setter: React.Dispatch<React.SetStateAction<IDataItem[]>>
) => {
  try {
    const res = await axios.get(URL_GET_DATA);
    if (res && res.data) {
      setter(res.data);
      return res.data;
    } else {
      throw new Error();
    }
  } catch (e) {
    console.log(e);
  }
};
