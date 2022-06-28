import styles from './SideComments.module.scss';
import { CommentsItem } from './CommentsItem';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import data from '../../mock';
import { useState } from 'react';
import clsx from 'clsx';

export const SideComments = () => {
  const [visible, setVisible] = useState<boolean>(true);

  const toggleVisible = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div className={clsx(styles.sideComments, !visible && styles.rotated)}>
      <h3 onClick={toggleVisible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {data.comments.popular.map(
        (obj): JSX.Element => (
          <CommentsItem key={obj.id} {...obj} />
        )
      )}
    </div>
  );
};
