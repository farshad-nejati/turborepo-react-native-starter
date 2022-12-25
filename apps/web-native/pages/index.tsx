import { Button } from "ui";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Hi Web</h1>

      <Button onClick={() => console.log("Pressed!")} text="Boop" />
    </div>
  );
}