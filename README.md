# Qrcode-Generator
This is a simple React application for generating and downloading QR codes. It uses the qrserver API to create QR codes based on user input.

Features
Generate QR Codes: Enter data and size to generate a QR code.
Download QR Codes: Download the generated QR code as a PNG file.
Real-time Updates: The QR code updates in real-time based on user input.
Loading Indicator: Displays a loading message while the QR code is being generated.
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/your-username/qr-code-generator.git
cd qr-code-generator
Install dependencies:

sh
Copy code
npm install
Start the development server:

sh
Copy code
npm start
Usage
Open the application in your browser.
Enter the data you want to encode in the QR code.
Specify the size of the QR code (e.g., 150).
Click the "Generate QrCode" button to generate the QR code.
Click the "Download QrCode" button to download the generated QR code.
Project Structure
src/: Contains the source code.
App.css: Styles for the application.
App.js: Main application component.
index.js: Entry point for the React application.
components/QrCode.js: QR code generator component.
Dependencies
React: ^17.0.2
CSS: Used for styling
React Hooks
This application uses React Hooks such as useState and useEffect to manage state and side effects.

License
This project is licensed under the MIT License.

By
Wortheez

