import { FunctionSquare, List } from 'lucide-react';
import { SidebarItems } from './SidebarItems';
import { BsHouse } from 'react-icons/bs';

const goesRoutes = [
  {
    path: '/admin',
    label: 'Dashboard',
    icon: BsHouse,
  },
  {
    path: '/admin/users',
    label: 'Users List',
    icon: FunctionSquare,
  },
  {
    path: '/admin/products',
    label: 'Products',
    icon: List,
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full gap-y-2">
      {goesRoutes.map((route) => (
        <SidebarItems
          key={route.path}
          label={route.label}
          icon={route.icon}
          path={route.path}
        />
      ))}
    </div>
  );
};
