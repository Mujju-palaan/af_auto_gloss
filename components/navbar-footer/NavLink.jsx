'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`block py-2 duration-200 hover:text-orange-700  ${
        isActive ? 'text-orange-700 border-b-3 border-orange-700' : 'text-gray-700'
      }`}
    >
      {children}
    </Link>
  );
}