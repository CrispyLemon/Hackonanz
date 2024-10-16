import React from "react";
import ChatBox from "./ChatBox";
import LookingFor from './LookingFor';
import Inbox from "./Inbox";

export default function Students() {
  return (
    <div style={{ display: 'flex', height: '100vh', padding: '20px' }}>
      <div style={{ flex: '0 0 30%', padding: '10px', borderRight: '1px solid #ccc' }}>
        <ChatBox />
      </div>
      <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ flex: '1', padding: '10px', border: '1px solid #ccc' }}>
          <Inbox />
        </div>
        <div style={{ flex: '1', padding: '10px', border: '1px solid #ccc' }}>
          <LookingFor />
        </div>
      </div>
    </div>
  );
}
