"use client";

import UserList from "./UserList";

export default function Sidebar({
  setSelectedConversation,
  selectedUserId,
  setSelectedUserId,
}: {
  setSelectedConversation: (id: string) => void;
  selectedUserId: string | null;
  setSelectedUserId: (id: string) => void;
}) {
  return (
    <div className="w-80 border-r">
      <UserList
        setSelectedConversation={setSelectedConversation}
        selectedUserId={selectedUserId}
        setSelectedUserId={setSelectedUserId}
      />
    </div>
  );
}