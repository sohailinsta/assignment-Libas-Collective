# Web Store (Libas Collective Task)

This is a Next.js + Firebase web store application with authentication, product listing, and responsive design for both web and mobile.

## 🚀 Features
- User authentication (Firebase Auth)
- Product listing from Firestore
- Responsive design for mobile & desktop
- Secure routes with ProtectedRoute
- SEO-friendly metadata setup
- Deployed on Vercel

## 🛠️ Technologies Used
- **Next.js** (React framework)
- **Firebase** (Auth + Firestore)
- **Bootstrap** (Styling)
- **Vercel** (Deployment)

## 📐 Architecture Decisions
- **Next.js App Router** for optimized routing and server-side rendering
- **Firebase Auth** for easy authentication without custom backend
- **Firestore** as a NoSQL database for flexible data storage
- **ProtectedRoute** HOC to prevent unauthenticated access
- **Responsive-first design** for mobile usability

### Trade-offs Considered
- Firebase chosen over a custom backend to save development time (less control over server logic)
- Tailwind CSS chosen over Material UI for faster styling but requires more custom components
- No server-side admin dashboard in this version due to time constraints

## 📦 Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/web-store.git
   cd web-store
   npm install
   npm run dev
