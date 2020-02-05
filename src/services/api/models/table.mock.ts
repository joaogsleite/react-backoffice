import { ITable } from './table';
import mock, { delay } from '../mock';

const TABLES: ITable[] = [
  { 
    name: 'users',
    layout: {
      label: 'Users',
    },
  },
  { 
    name: 'products',
    layout: {
      label: 'Products',
    },
  },
];

mock('GET', '/tables', async () => {
  await delay(1000);
  return TABLES;
});