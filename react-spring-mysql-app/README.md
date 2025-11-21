# React Spring MySQL Application

This project is a full-stack application built using React for the frontend, Spring Boot for the backend, and MySQL as the database. 

## Project Structure

```
react-spring-mysql-app
├── client                # Frontend application
│   ├── package.json      # NPM configuration for React app
│   ├── tsconfig.json     # TypeScript configuration
│   ├── .env              # Environment variables for client
│   ├── public            # Public assets
│   │   └── index.html    # Main HTML file
│   └── src               # Source files for React app
│       ├── index.tsx     # Entry point for React app
│       ├── App.tsx       # Main App component
│       ├── components     # Reusable components
│       │   └── common
│       │       └── Header.tsx # Header component
│       ├── pages         # Page components
│       │   └── Home.tsx   # Home page component
│       ├── services       # API service functions
│       │   └── api.ts     # API calls
│       ├── hooks          # Custom hooks
│       │   └── useAuth.ts  # Authentication hook
│       └── types          # TypeScript types
│           └── index.ts   # Type definitions
├── server                # Backend application
│   ├── pom.xml           # Maven configuration
│   ├── src               # Source files for Spring Boot app
│   │   └── main
│   │       ├── java
│   │       │   └── com
│   │       │       └── example
│   │       │           └── app
│   │       │               ├── Application.java
│   │       │               ├── controller
│   │       │               │   └── UserController.java
│   │       │               ├── service
│   │       │               │   └── UserService.java
│   │       │               ├── repository
│   │       │               │   └── UserRepository.java
│   │       │               └── model
│   │       │                   └── User.java
│   │       └── resources
│   │           ├── application.properties
│   │           └── db
│   │               └── migration
│   └── Dockerfile        # Dockerfile for Spring Boot app
├── docker-compose.yml    # Docker Compose configuration
├── sql                   # SQL scripts
│   ├── schema.sql        # Database schema
│   └── seed.sql          # Seed data
├── .env.example          # Example environment variables
└── README.md             # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and npm
- Java JDK
- Maven
- MySQL

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd react-spring-mysql-app
   ```

2. Set up the backend:
   - Navigate to the `server` directory.
   - Update the `application.properties` file with your database configuration.
   - Build the Spring Boot application using Maven:
     ```
     mvn clean install
     ```

3. Set up the frontend:
   - Navigate to the `client` directory.
   - Install the dependencies:
     ```
     npm install
     ```

### Running the Application

- Start the backend server:
  ```
  mvn spring-boot:run
  ```

- Start the frontend application:
  ```
  npm start
  ```

### Database Setup

- Run the SQL scripts located in the `sql` directory to set up your database schema and seed data.

### Docker

- You can also run the application using Docker. Use the following command:
  ```
  docker-compose up
  ```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.