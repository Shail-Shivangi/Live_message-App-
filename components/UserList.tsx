"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useUser } from "@clerk/nextjs";

export default function UserList({
  setSelectedConversation,
  selectedUserId,
  setSelectedUserId,
}: {
  setSelectedConversation: (id: string) => void;
  selectedUserId: string | null;
  setSelectedUserId: (id: string) => void;
})  {
  const users = useQuery(api.users.getUsers);
  const { user } = useUser();
  const createConversation = useMutation(
    api.conversations.createOrGetConversation
  );

  if (!users) return null;

  const currentUser = users.find(
    (u) => u.clerkId === user?.id
  );

  const others = users.filter(
    (u) => u.clerkId !== user?.id
  );

  return (
    <div>
      {others.map((u) => (
  <div
    key={u._id}
    className={`flex items-center gap-3 p-3 cursor-pointer transition-all duration-200 ${
  selectedUserId === u._id
    ? "bg-blue-100 border-r-4 border-blue-500"
    : "hover:bg-gray-100"
}`}
    onClick={async () => {
      const convoId = await createConversation({
        user1: currentUser!._id,
        user2: u._id,
      });

      setSelectedConversation(convoId);
      setSelectedUserId(u._id);
    }}
  >
    {/* Avatar + Green Dot */}
    <div className="relative">
      <img
        src={u.image}
        alt={u.name}
        className="w-10 h-10 rounded-full"
      />

      {u.online && (
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
      )}
    </div>

    <div>
      <p className="font-medium">{u.name}</p>
      <p className="text-xs text-gray-400">
        {u.online ? "Online" : "Offline"}
      </p>
    </div>
  </div>
))}
    </div>
  );
}