🛍️ Nxt Trendz – E-commerce Web App
Nxt Trendz is a modern e-commerce web application built using React.js that supports login functionality with Prime and Non-Prime credentials. It includes features like product browsing, cart management, and conditional access to routes based on authentication.

🔐 Login Credentials
✅ Prime User
makefile
Copy
Edit
Username: rahul  
Password: rahul@2021
✅ Non-Prime User
makefile
Copy
Edit
Username: raja  
Password: raja@2021
🚀 Getting Started
Follow these instructions to set up and run the project locally.

1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/SakethNxtTrendzApp.git
cd SakethNxtTrendzApp
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Development Server
bash
Copy
Edit
npm start
The application will open in your browser at http://localhost:3000.

🧩 Features
🔐 User authentication with Prime/Non-Prime access.

🛒 Add to cart functionality.

➕➖ Increase/decrease product quantity in cart.

❌ Remove individual items or clear entire cart.

💰 Live cart total calculation.

🚫 Route protection for unauthenticated users.

🛠️ Built With
React.js

React Router

React Icons

Context API

CSS3

📁 Project Structure
java
Copy
Edit
SakethNxtTrendzApp/
├── public/
├── src/
│   ├── components/
│   │   ├── Cart/
│   │   ├── CartItem/
│   │   ├── CartSummary/
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
📌 Notes
All components are placed under the src/components directory.

App uses Context API for managing cart state.

Prime users may have additional privileges/features.

Code is modular and easy to extend or customize.

📧 Contact
For questions or feedback, please reach out at [your-email@example.com].
