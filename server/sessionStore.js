const sessions = new Map();

export const createSession = (spotifyData) => {
  const sessionID = crypto.randomUUID();
  sessions.set(sessionID, {
    ...spotifyData,
    createdAt: Date.now(),
  });
  return sessionID;
};

export const getSession = (sessionID) => sessions.get(sessionID);
export const deleteSession = (sessionID) => sessions.delete(sessionID);
