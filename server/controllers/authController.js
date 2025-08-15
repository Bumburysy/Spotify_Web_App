import axios from "axios";
import { createSession } from "../sessionStore.js";

export const loginWithSpotify = async (req, res) => {
  const code = req.body.code;
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: process.env.SPOTIFY_REDIRECT_URI,
        client_id: process.env.SPOTIFY_CLIENT_ID,
        client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    const sessionID = createSession({
      access_token: response.data.access_token,
      refresh_token: response.data.refresh_token,
      expires_in: response.data.expires_in,
    });
    res.json({ sessionID });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(400).json({ error: "Failed to fetch Spotify token" });
  }
};
