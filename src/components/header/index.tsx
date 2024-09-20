import React from 'react';
import HeaderClient from './header.client';
import getUser from '@/actions/get-user';

export default async function Header() {
  const { data } = await getUser();

  return <HeaderClient user={data} />;
}
