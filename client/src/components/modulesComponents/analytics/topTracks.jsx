import { useEffect, useState } from "react";
import styles from "./topTracks.module.css";

export default function TopTracks() {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const sessionID = localStorage.getItem("sessionID");
    if (!sessionID) {
      setError("Missing session – please log in again");
      setLoading(false);
      return;
    }

    fetch("http://localhost:3001/api/analytics/top-tracks", {
      headers: { "X-Session-ID": sessionID },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        setTracks(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (tracks.length === 0) return <p>No data available</p>;

  const topTrack = tracks[0];
  const top5 = tracks.slice(1, 6);

  return (
    <div className={styles.container}>
      <h2>Twoje najczęściej słuchane utwory</h2>

      <div className={styles.topTrack}>
        <img src={topTrack.album.images[0]?.url} alt={topTrack.name} />
        <div>
          <h3>{topTrack.name}</h3>
          <p>{topTrack.artists.map((a) => a.name).join(", ")}</p>
          <span>Popularność: {topTrack.popularity}/100</span>
        </div>
      </div>

      <div className={styles.grid}>
        {top5.map((track) => (
          <div key={track.id} className={styles.card}>
            <img src={track.album.images[0]?.url} alt={track.name} />
            <h4>{track.name}</h4>
            <p>{track.artists.map((a) => a.name).join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
