import React, { useRef } from 'react';
import { Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

import styles from './Comment.module.scss';

interface CommentPostProps {
  user: {
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  createdAt: string;
}

export const Comment: React.FC<CommentPostProps> = ({
  user,
  text,
  createdAt,
}) => {
  const menuAnchorRef = useRef(null);
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleClick = (event: React.MouseEvent) => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img src={user.avatarUrl} alt="Avatar" />
        <b>{user.fullname}</b>
        <span>{createdAt}</span>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick} ref={menuAnchorRef}>
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={menuAnchorRef.current}
        elevation={2}
        open={isOpen}
        onClose={handleClose}
        keepMounted
      >
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};
