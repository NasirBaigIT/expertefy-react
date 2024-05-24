import React from "react";
import styles from "./HomePoster.scss";

const HomePoster = () => {
  return (
    <div className="expert-insights">
      <div className="text-section">
        <h1>
          Your <span className="highlight">Trusted</span> Partner for{" "}
          <span className="highlight">EXPERT</span> Insights
        </h1>
        <p>
          Connecting consultants and businesses with industry leaders for
          valuable market insights.
        </p>
        <div className="buttons">
          <button className="need-expert">Need An Expert</button>
          <button className="become-expert">Become An Expert</button>
        </div>
      </div>
      <div className="image-section">
        {/* <img src="/src/assets/homePoster/topMask.png" alt="Expert Insights" /> */}
      </div>
    </div>
  );
};

export default HomePoster;
