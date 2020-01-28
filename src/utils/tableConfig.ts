
export interface ITableConfig {
  name: string,
  visible: boolean,
  layout: {
    label: string,
    listPage: any,
  }
}

export const table: ITableConfig = {
  name: 'asdasd',
  visible: true,
  layout: {
    label: 'asdasd',
    listPage: {},
  }
}

export function isVisibleInSideMenu(table: ITableConfig): boolean {
  return table.visible && (table.layout && table.layout.listPage) !== false
}
