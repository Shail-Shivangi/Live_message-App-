// "use client";

// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import { useMutation } from "convex/react";
// import { api } from "../../convex/_generated/api";
// import Sidebar from "@/components/Sidebar";
// import ChatWindow from "@/components/ChatWindow";

// export default function ChatPage() {
//   const { user } = useUser();
//   const createUser = useMutation(api.users.createUser);

//   const [selectedConversation, setSelectedConversation] =
//     useState<string | null>(null);

//   useEffect(() => {
//     if (user) {
//       createUser({
//         clerkId: user.id,
//         name: user.fullName || "Unknown",
//         image: user.imageUrl,
//       });
//     }
//   }, [user]);

//   return (
//     <div className="flex h-screen">
//         <button
//   className="md:hidden mr-2"
//   onClick={() => setSelectedConversation(null)}
// >
//   ← Back
// </button>
//   <div
//     className={`${
//       selectedConversation
//         ? "hidden md:flex"
//         : "flex"
//     } w-full md:w-80`}
//   >
//     <Sidebar />
//   </div>

//   <div
//     className={`${
//       selectedConversation
//         ? "flex"
//         : "hidden md:flex"
//     } flex-1`}
//   >
//     <ChatWindow />
//   </div>
// </div>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import Sidebar from "@/components/Sidebar";
import ChatWindow from "@/components/ChatWindow";
import { useQuery } from "convex/react";

export default function ChatPage() {
    const setOnline = useMutation(api.presence.setOnline);
const setOffline = useMutation(api.presence.setOffline);
const users = useQuery(api.users.getUsers);
  const { user } = useUser();
   const [selectedConversation, setSelectedConversation] =
  useState<string | null>(null);

const [selectedUserId, setSelectedUserId] =
  useState<string | null>(null);
  const createUser = useMutation(api.users.createUser);
  const currentUser = users?.find(
  (u) => u.clerkId === user?.id
);

 

useEffect(() => {
  if (currentUser) {
    setOnline({ userId: currentUser._id });

    window.addEventListener("beforeunload", () => {
      setOffline({ userId: currentUser._id });
    });
  }
}, [currentUser]);
  useEffect(() => {
    if (user) {
      createUser({
        clerkId: user.id,
        name: user.fullName || "Unknown",
        image: user.imageUrl,
      });
    }
  }, [user]);

  return (
    <div className="flex h-screen">
        
     <Sidebar
  setSelectedConversation={setSelectedConversation}
  selectedUserId={selectedUserId}
  setSelectedUserId={setSelectedUserId}
/>
      <ChatWindow
        conversationId={selectedConversation}
      />
    </div>
  );
}