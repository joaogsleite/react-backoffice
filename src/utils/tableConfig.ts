import { ITable, IColumn } from "services/api/models/table";

export const emptyTableConfig: ITable = {
  name: '',
  columns: [],
  layout: {
    label: '',
  },
};

export const emptyColumnConfig: IColumn = {
  name: '',
  model: {},
  layout: {},
}