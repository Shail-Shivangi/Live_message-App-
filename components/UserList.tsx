"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { useUser } from "@clerk/nextjs";

export default function UserList({ setSelectedConversation }: any) {
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
          className="p-3 hover:bg-gray-100 cursor-pointer"
          onClick={async () => {
            const convoId = await createConversation({
              user1: currentUser!._id,
              user2: u._id,
            });

            setSelectedConversation(convoId);
          }}
        >
          {u.name}
        </div>
      ))}
    </div>
  );
}