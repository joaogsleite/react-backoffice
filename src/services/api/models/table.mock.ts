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

mock('GET', '/tables/users', async () => {
  await delay(1000)
  const columns = [
    { name: 'id' },
    { name: 'username' },
    { name: 'email' },
  ]
  return { columns, ...TABLES[0] }
})
mock('GET', '/tables/products', async () => {
  await delay(1000)
  const columns = [
    { name: 'id' },
    { name: 'name' },
    { name: 'description' },
  ]
  return { columns, ...TABLES[1] }
})