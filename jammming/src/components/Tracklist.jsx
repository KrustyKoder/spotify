import React from "react";

function TrackList({ tracks }) {
  
  
  
  
  
  return (
    <div id='tracklist'>
      <h2>Track List</h2>
      <ul>
        {tracks.map((track) => (
          <li>{track.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default TrackList;
