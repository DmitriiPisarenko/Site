import React from 'react';
import styles from './arrow-right.module.css';
import classnames from 'classnames';

export default function ArrowRight (props) {
  return (
    <div className={classnames(styles.ArrowRight, props.className)} />
  );
}