"use client";

import UserList from "./UserList";

export default function Sidebar({ setSelectedConversation }: any) {
  return (
    <div className="w-80 border-r">
      <UserList setSelectedConversation={setSelectedConversation} />
    </div>
  );
}