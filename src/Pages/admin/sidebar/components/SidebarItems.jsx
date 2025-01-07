import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

export const SidebarItems = ({ path, label, icon: Icon }) => {
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const isActive =
  (pathname === '/' && path === '/') || // Special case for root path
  pathname === path || // Exact match
  (pathname.startsWith(`${path}/`) && pathname.split('/').length === path.split('/').length + 1); // Direct child match



  const onClick = () => {
    navigate(path);
  };
  
  return (
    <div>
      <button
  onClick={onClick}
  type="button"
  className={`flex items-center gap-x-2 w-full text-sm font-medium pl-6 transition-all rounded-sm 
    ${isActive ? 'text-admin-primary bg-admin-secondary' : 'text-admin-neutral hover:text-admin-dark hover:bg-slate-400/10'}`}
>
  <div className="flex items-center gap-x-2 py-3">
    {Icon && (
      <Icon
        className={`h-5 w-5 ${isActive ? 'text-admin-primary' : 'text-admin-neutral'}`}
      />
    )}
    {label}
  </div>
</button>

    </div>
  );
};

// Add PropTypes validation
SidebarItems.propTypes = {
    path: PropTypes.string.isRequired, // Path must be a string
    label: PropTypes.string.isRequired, // Label must be a string
    icon: PropTypes.elementType.isRequired, // Icon must be a React component
  };