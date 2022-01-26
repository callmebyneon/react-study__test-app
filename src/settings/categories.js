//Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import TableViewIcon from '@mui/icons-material/TableView';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import { IconBrandDocker } from '@tabler/icons';


export const categories = [
  {
    id: 'Monitor',
    children: [
      { id: 'Dashboard', href: '/dashboard', icon: <DashboardIcon />, active: false },
      { id: 'Charts', href: '/charts', icon: <InsertChartIcon />, active: false },
      { id: 'Data', href: '/data', icon: <TableViewIcon />, active: false },
    ],
  },
  {
    id: 'Server',
    children: [
      { id: 'Cloud', href: '/cloud', icon: <CloudSyncIcon />, active: false },
      { id: 'Docker', href: '/docker', icon: <IconBrandDocker />, active: false },
    ],
  },
  {
    id: 'Settings',
    children: [
      { id: 'Profile', href: '/signin', icon: <PeopleIcon />, active: false },
      { id: 'Set up', href: '/setup', icon: <SettingsIcon />, active: false },
    ]
  }
];