import React, { useRef } from 'react';
import {
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import styles from './CommentPost.module.scss';

interface CommentPostProps {
  user: {
    fullname: string;
  };
  text: string;
  post: {
    title: string;
  };
}

export const CommentPost: React.FC<CommentPostProps> = ({
  user,
  post,
  text,
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
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h6" className={styles.title}>
        <a href="#">{post.title}</a>
        <IconButton onClick={handleClick}>
          <MoreVertIcon />
        </IconButton>
      </Typography>
      <Typography className="mt-10 mb-15">{text}</Typography>

      <Menu
        id="simple-menu"
        anchorEl={menuAnchorRef.current}
        elevation={3}
        keepMounted
        open={isOpen}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </Paper>
  );
};
