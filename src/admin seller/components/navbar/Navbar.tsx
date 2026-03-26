import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface DrawerListProps {
  toggleDrawer: (newOpen: boolean) => () => void;
}

interface NavbarProps {
  DrawerList: React.ComponentType<DrawerListProps>;
}

const Navbar = ({ DrawerList }: NavbarProps) => {
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);

  };

  return (
    <div className='h-[10vh] flex items-center px-5 border-b'>
      <div className='flex items-center gap-3 '>
        <IconButton onClick={toggleDrawer(true)} color='primary'>
          <MenuIcon color='primary' />
        </IconButton>

        <h1 onClick={() => navigate("/")} className='logo text-xl cursor-pointer'>Madean Hive</h1>
      </div>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>

    </div>
  )
}

export default Navbar