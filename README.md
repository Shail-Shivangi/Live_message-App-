Real-Time Chat Application
A modern, full-stack real-time chat application featuring instant messaging, presence tracking, typing indicators, and unread message counters.

🚀 Features
Real-time Messaging: Instant message delivery powered by Convex's reactive database.

User Authentication: Secure login and profile management via Clerk.

Presence System: Real-time "Online" and "Last Seen" status tracking.

Typing Indicators: Visual feedback when a user is typing a message.

Unread Message Badges: Real-time counters for unread messages per conversation.

Smart Scroll: Automatic scrolling to new messages with a "New Message" notification button if you're scrolled up.

User Search: Search through the global user directory to start new conversations.

🛠️ Tech Stack
Framework: Next.js 14 (App Router).

Backend/Database: Convex (Real-time functions and storage).

Auth: Clerk.

Styling: Tailwind CSS.

Language: TypeScript.

📁 Project Structure

├── chat/               # Main chat application page
├── components/         # React components (ChatWindow, Sidebar, etc.)
├── convex/             # Backend schema and API functions
│   ├── schema.ts       # Database definitions
│   ├── messages.ts     # Chat logic (send, read, list)
│   ├── users.ts        # User management logic
│   └── presence.ts     # Online/Offline status logic
├── lib/                # Shared utilities (formatting, etc.)
└── public/             # Static assets

⚙️ Setup Instructions
1. Clone the repository
git clone https://github.com/Shail-Shivangi/Live_message_App

2. Install dependencies
npm install

3. Environment Variables
Create a .env.local file in the root directory and add your credentials:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CONVEX_URL=https://...
