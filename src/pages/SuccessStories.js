import Scroll1 from "../components/Scroll1";
import Title from "../components/Title";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./SuccessStories.module.css";

const SuccessStories = () => {
  return (
    <div className={styles.successstories}>
      <section className={styles.main}>
        <Scroll1 />
        <Title />
      </section>
      <section className={styles.insights}>
        <FrameComponent1 />
        <FrameComponent />
      </section>
    </div>
  );
};

export default SuccessStories;
