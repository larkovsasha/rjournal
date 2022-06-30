import { IconButton, Paper, Button } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';

import styles from './Header.module.scss';
import { Logo } from '../Logo';
import {
  MessageOutlined,
  NotificationsOutlined,
  SearchOutlined,
  ExpandMoreOutlined as ArrowBottom,
} from '@material-ui/icons';
import Link from 'next/link';
import { Avatar } from '@mui/material';
export const Header = () => {
  return (
    <Paper classes={{ root: styles.Header }}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>

        <Logo />

        <div className={styles.searchBlock}>
          <SearchOutlined />
          <input placeholder="Поиск" />
        </div>

        <Link href="/write">
          <a>
            <Button variant="contained" className={styles.newPost}>
              Новая запись
            </Button>
          </a>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageOutlined />
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <Link href="/profile/1">
          <a className="d-flex align-center">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
            <ArrowBottom />
          </a>
        </Link>
      </div>
    </Paper>
  );
};
