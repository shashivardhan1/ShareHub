# File Sharing

This backend project enables users to upload files and generate shareable links for others to download the files. It utilizes Node.js with Express, EJS for templating, Nodemailer for email functionality, Nodemon for development, Mongoose for MongoDB integration, UUID for generating unique identifiers, and Multer for handling file uploads.

## Preview

![Preview 1](https://github.com/sahilatahar/file-sharing/assets/100127570/9cbebe8f-cf70-4842-b175-b795007f512c)
![Preview 2](https://github.com/sahilatahar/file-sharing/assets/100127570/627dae87-c0c5-4642-9995-122c2624dcc3)
![Preview 3](https://github.com/sahilatahar/file-sharing/assets/100127570/92a25c39-c6bd-4589-bfae-af9fb5d5bfd6)

## Features

- **File Upload:** Users can upload files to the server.
- **Shareable Links:** Generates unique shareable links for uploaded files.
- **Download Files:** Other users can download files using the generated shareable links.

## Tech Stack

- Node.js
- Express.js
- EJS (Embedded JavaScript) for templating
- Nodemailer for email functionality
- Nodemon for development
- MongoDB with Mongoose for database operations
- UUID for generating unique identifiers
- Multer for handling file uploads

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/sahilatahar/file-sharing.git
   ```
2. Install dependencies:
   ```bash
   cd file-sharing
   npm install
   ```
3. Create an `.env` file and add necessary environment variables.
   ```bash
    PORT=3000
    MONGO_URI=<mongodb uri>           # mongodb://localhost:27017/FileShare
    APP_BASE_URL=<base url>           # http://localhost:300
    EMAIL=<email>
    EMAIL_PASSWORD=<gmail password>
   ```
4. Create an `uploads` directory in the root folder to store uploaded files.
5. Run the application:
   ```base
   npm run dev
   ```
6. Access the application in your browser at `http://localhost:3000`.

## Contributions
Contributions are welcome! If you want to contribute to this project, please fork the repository and create a pull request. For major changes, please open an issue first to discuss the changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

