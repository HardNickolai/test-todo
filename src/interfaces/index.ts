export interface IDataItem {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface IPropsPost {
  post: IDataItem;
}
