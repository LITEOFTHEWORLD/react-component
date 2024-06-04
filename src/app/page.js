import Image from "next/image";
import styles from "./page.module.css";
import AccordionUsage from "@/components/accordion/Accordion";
import BasicSwitches from "@/components/switch/Switch";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <AccordionUsage />
      <BasicSwitches />
    </div>
  );
}
