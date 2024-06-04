"use client";
import { useState } from "react";
import Images from "next/image";
import Switch from "@mui/material/Switch";
import styles from "./switch.module.css";
import Link from "next/link";
export default function ControlledSwitches() {
  const [checked, setChecked] = useState(false);
  useState;

  const handleChange = (event) => {
    setChecked(event.target.checked);
    checked
      ? alert("you turned off notification")
      : alert("notification allowed");
  };

  return (
    <>
      <div className={styles.notification}>
        <h3>Notification</h3>{" "}
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <Link href="/" className={styles.policy}>
        <h3>Privacy Policy</h3>{" "}
        <Images src={"/asset/Vector.svg"} width={18} height={14} />
      </Link>
      <Link href="/" className={styles.policy}>
        <h3>Terms and Condition</h3>{" "}
        <Images src={"/asset/Vector.svg"} width={18} height={14} />
      </Link>
    </>
  );
}
