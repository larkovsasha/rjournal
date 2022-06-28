import styles from './SideComments.module.scss';
import React from 'react';

export interface ICommentsItemProps {
  user: {
    fullName: string;
    avatarUrl: string;
  };
  text: string;
  post: {
    title: string;
  };
}

export const CommentsItem: React.FC<ICommentsItemProps> = ({
  text,
  user,
  post,
}) => {
  return (
    <div className={styles.commentItem}>
      <div className={styles.userInfo}>
        <img
          src="https://leonardo.osnova.io/598fc957-a3f6-598c-b6f9-a033c3941d12/-/scale_crop/64x64/-/format/webp/"
          alt=""
        />
        <a href={'#'}>
          <b>{user.fullName}</b>
        </a>
      </div>
      <p className={styles.text}>{text}</p>
      <a href="#">
        <span className={styles.postTitle}>{post.title}</span>
      </a>
    </div>
  );
};
