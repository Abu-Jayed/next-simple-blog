import delay from "delay";
import React from 'react';
import styles from './page.module.css'

const Contact =async () => {
  const {contact} = styles
  await delay(700)
  return (
    <div className={contact}>
      contact
    </div>
  );
};

export default Contact;