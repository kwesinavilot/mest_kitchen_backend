'use client';
import { useState } from 'react';
import {
  IconBellRinging,
  IconFingerprint,
  IconKey,
  IconDatabaseImport,
  IconReceipt2,
} from '@tabler/icons-react';
import classes from '@/styles/Sidebar.module.css';
import Link from 'next/link';

const data = [
  { link: '/dashboard', label: 'Dashboard', icon: IconBellRinging },
  { link: '/members', label: 'Members', icon: IconReceipt2 },
  { link: '', label: 'Requests', icon: IconFingerprint },
  { link: '', label: 'Reports', icon: IconKey },
  { link: '', label: 'Staff', icon: IconDatabaseImport },
];

export function Sidebar() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <Link
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {links}
      </div> 
    </nav>
  );
}