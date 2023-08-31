import { useEffect, useState } from "react";
import { fetchData } from "../api";
import Post from "../common/Post";
import { IDataItem } from "../interfaces";
import { ReactComponent as Add } from "../svg/add_bold.svg";
import { ReactComponent as Count } from "../svg/Type_of_Task.svg";

const Main = () => {
  const [list, setList] = useState<Array<IDataItem> | []>([]);
  useEffect(() => {
    fetchData(setList);
  }, []);
  return (
    <div className="block-main">
      <div className="block-title">
        <p>Today</p>
        <div className="block-title-block-image">
          <div className="block-title-icon">
            <Add />
          </div>
          <div className="block-title-icon">
            <Count />
          </div>
        </div>
      </div>
      <div className="block-posts">
        {list.map((item: IDataItem, index: number) => (
          <div key={`key-${index}`} className="block-card">
            <Post post={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
