import { ITable } from './table';
import mock, { delay } from '../mock';

const TABLES: ITable[] = [
  { 
    name: 'users',
    columns: [],
    layout: {
      label: 'Users',
    },
  },
  { 
    name: 'products',
    columns: [],
    layout: {
      label: 'Products',
    },
  },
];

mock('GET', '/tables', async () => {
  await delay(1000);
  return TABLES;
});