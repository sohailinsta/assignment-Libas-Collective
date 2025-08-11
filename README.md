# Web Store (Libas Collective Task)

This is a Next.js + Firebase web store application with authentication, product listing, and responsive design for both web and mobile.

## Features
- User authentication (Firebase Auth)
- Product listing from Firestore
- Responsive design for mobile & desktop
- Secure routes with ProtectedRoute
- SEO-friendly metadata setup
- Deployed on Vercel

## Technologies Used
- **Next.js** (React framework)
- **Firebase** (Auth + Firestore)
- **Bootstrap** (Styling & Layout)
- **Vercel** (Deployment)

## Architecture Decisions
- **Frontend Framework:** React.js was chosen for building a responsive and dynamic UI with reusable components.
- **State Management:** Firebase’s built-in authentication and Firestore’s real-time updates were used, removing the need for a separate state management library like Redux for this version.
- **Styling:** Bootstrap was used for consistent styling and responsive design out-of-the-box, reducing custom CSS effort.
- **Hosting & Deployment:** Vercel Deployment was selected for its easy integration with the Nextjs and fast global CDN.
- **Authentication:** Firebase Authentication was implemented to manage user login and registration securely without writing custom auth logic.
- **Database:** Cloud Firestore was used for its scalability, real-time updates, and smooth integration with the rest of the Firebase ecosystem.

## Trade-offs Considered
- **Firebase vs. Custom Backend:** Firebase was selected for rapid development and integrated features, but this limits backend customization and control over server-side logic.
- **Bootstrap vs. Tailwind/Material UI:** Bootstrap allowed quick layout creation and responsive design but offers less design flexibility than Tailwind and fewer ready-made complex components compared to Material UI.
- **Real-time Database Updates:** Firestore’s real-time updates improve user experience but may increase read costs for high-traffic apps compared to batched or on-demand data fetching.
- **Vendor Lock-in:** Relying on Firebase’s ecosystem speeds up development but increases dependency on Google Cloud services. Migrating to another provider in the future would require significant changes.
- **Scalability Considerations:** Firebase scales well initially but can become costly for large-scale, read-intensive applications without careful optimization.


## Setup Instructions
1. Clone the repository:
   git clone https://github.com/sohailinsta/assignment-Libas-Collective.git
   cd assignment-Libas-Collective
   npm install
   npm run dev

