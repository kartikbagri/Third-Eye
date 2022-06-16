import React from "react";
import styles from "./YoutubeEmbed.module.css";

const YoutubeEmbed = ({ embedId }) => (
  <div className={styles['youtube-embed']}>
    <iframe
    height="400"
    width="710"
        src={`https://www.youtube.com/embed/${embedId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
);

export default YoutubeEmbed;