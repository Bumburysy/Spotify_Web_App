import { getSession } from "../sessionStore.js";
import axios from "axios";

export const getTopTracks = async (req, res) => {
  const sessionID = req.headers["x-session-id"];
  if (!sessionID) return res.status(401).json({ error: "No session ID" });

  const session = getSession(sessionID);
  if (!session) return res.status(401).json({ error: "Invalid session" });

  try {
    const response = await axios.get(
      "https://api.spotify.com/v1/me/top/tracks?limit=6",
      {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );

    res.json(response.data.items);
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(400).json({ error: "Failed to fetch top tracks" });
  }
};
