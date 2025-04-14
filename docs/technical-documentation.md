
# StartupFundr Technical Documentation

## Tech Stack Overview

StartupFundr is built using a modern, scalable tech stack that separates concerns between frontend and backend:

### Frontend Stack
- **React (v18.3)**: Core UI library providing component-based architecture
- **TypeScript**: Strongly typed language for enhanced code quality and developer experience
- **Vite**: Modern build tool for faster development and optimized production builds
- **TailwindCSS**: Utility-first CSS framework for responsive design
- **Shadcn UI**: Component library built on Radix UI primitives
- **React Query (TanStack Query)**: Data fetching, caching, and state management
- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API requests
- **Recharts**: Data visualization components
- **Lucide React**: Icon library
- **React Hook Form**: Form validation and submission

### Backend Stack
- **Java Spring Boot**: Core backend framework
- **Spring Security**: Authentication and authorization
- **Spring Data MongoDB**: Database integration
- **MongoDB**: NoSQL document database
- **JWT**: Token-based authentication
- **OpenAPI/Swagger**: API documentation
- **Maven**: Dependency management and build automation

## System Architecture

```
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│                 │      │                 │      │                 │
│  React Frontend │<─────│  Spring Boot    │<─────│    MongoDB      │
│  (TypeScript)   │      │  REST API       │      │    Database     │
│                 │      │                 │      │                 │
└─────────────────┘      └─────────────────┘      └─────────────────┘
       │                         │                        │
       │                         │                        │
┌──────▼─────────┐     ┌─────────▼────────┐     ┌────────▼─────────┐
│                │     │                  │     │                  │
│  React Query   │     │  Authentication  │     │  Data Models &   │
│  State Mgmt    │     │  & Authorization │     │  Repositories    │
│                │     │                  │     │                  │
└────────────────┘     └──────────────────┘     └──────────────────┘
```

## Frontend Structure

### Core Directories
- **`/src/components`**: Reusable UI components
- **`/src/pages`**: Page components corresponding to routes
- **`/src/hooks`**: Custom React hooks
- **`/src/services`**: API service functions
- **`/src/contexts`**: React context providers
- **`/src/types`**: TypeScript type definitions
- **`/src/lib`**: Utility functions and helpers

### Key Components

#### UI Components
- **Navbar**: Main navigation component
- **Footer**: Site-wide footer
- **StartupMetrics**: Displays startup funding metrics
- **StartupDescription**: Renders startup description
- **StartupFounders**: Shows founder information
- **InvestmentCard**: Card for investment actions
- **InvestmentSheet**: Modal/sheet for investment flow
- **NotificationCenter**: User notifications display

#### Pages
- **Index**: Homepage with featured startups
- **Startups**: Browsable startup listings
- **StartupDetail**: Individual startup page
- **Dashboard**: User dashboard
- **Portfolio**: User investment portfolio
- **Login/Signup**: Authentication pages
- **About/FAQ/Contact**: Informational pages

### Custom Hooks
- **`useNotifications`**: Manages user notifications
- **`useStartups`**: Handles startup data fetching
- **`useInvestments`**: Manages investment actions
- **`useAuth`**: Handles authentication state
- **`useMobile`**: Responsive design detection

## Backend Structure

### API Controllers
- **StartupController**: Startup CRUD operations
- **InvestmentController**: Investment processing
- **UserController**: User management
- **AuthController**: Authentication endpoints
- **NotificationController**: User notifications
- **SuccessStoryController**: Success story data
- **TransactionController**: Financial transactions
- **PostController**: Startup updates/posts
- **CommentController**: Post comment system

### Service Layer
- **StartupService**: Startup business logic
- **InvestmentService**: Investment processing logic
- **AuthService**: Authentication logic
- **NotificationService**: Notification management
- **UserService**: User management
- **TransactionService**: Financial transaction processing
- **WalletService**: User wallet operations

### Data Models
- **Startup**: Startup entity
- **User**: User account entity
- **Investment**: Investment record
- **Transaction**: Financial transaction
- **Notification**: User notification
- **SuccessStory**: Success story entity
- **Post**: Startup update post
- **Comment**: Post comment

## API Integration

### Frontend-Backend Communication
The frontend communicates with the backend through RESTful API endpoints using Axios for HTTP requests. The API service (`/src/services/api.ts`) provides:

- Base URL configuration based on environment
- Authentication token management
- Error handling with appropriate user feedback
- Request/response interceptors

### Key API Endpoints

#### Startups
- `GET /api/startups`: Get all startups
- `GET /api/startups/featured`: Get featured startups
- `GET /api/startups/{id}`: Get startup by ID
- `POST /api/startups`: Create a new startup
- `PUT /api/startups/{id}`: Update a startup

#### Investments
- `POST /api/investments`: Create new investment
- `GET /api/investments/user/{userId}`: Get user investments
- `GET /api/investments/startup/{startupId}`: Get startup investments

#### Authentication
- `POST /auth/login`: User login
- `POST /auth/signup`: User registration
- `GET /auth/validate`: Validate auth token

#### Notifications
- `GET /api/notifications/user/{userId}`: Get user notifications
- `PUT /api/notifications/{id}/read`: Mark notification as read
- `POST /api/notifications`: Create notification

## State Management

The application uses React Query (TanStack Query) for server state management, providing:

- Data fetching with caching
- Background refetching
- Loading and error states
- Mutation capabilities

Example usage:

```typescript
// Query hook for fetching data
const { data, isLoading } = useQuery({
  queryKey: ["startups"],
  queryFn: startupService.getAll
});

// Mutation hook for modifying data
const { mutateAsync } = useMutation({
  mutationFn: startupService.create,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ["startups"] });
  }
});
```

## Authentication Flow

1. User submits login credentials
2. Backend validates credentials and issues JWT token
3. Token is stored in localStorage
4. Token is included in Authorization header for subsequent requests
5. Protected routes check for valid token

## Key Functions and Their Purpose

### Frontend

#### `useNotifications` Hook
- `getUserNotifications`: Fetches user notifications
- `markAsRead`: Marks a notification as read
- `createNotification`: Creates a new notification
- `unreadCount`: Calculates unread notification count

#### `useStartups` Hook
- `getStartups`: Fetches all startups
- `getFeaturedStartups`: Fetches featured startups
- `getStartupById`: Fetches a specific startup
- `createStartup`: Creates a new startup

#### API Service
- Request interceptors: Add auth token to requests
- Response interceptors: Handle errors, show notifications
- Environment-based URL configuration

### Backend

#### AuthService
- `login`: Authenticates user and issues token
- `signup`: Registers new user
- `validateToken`: Verifies token validity

#### StartupService
- `getAllStartups`: Retrieves all startups
- `getStartupById`: Retrieves specific startup
- `createStartup`: Creates new startup record
- `updateStartup`: Updates startup information

#### NotificationService
- `getUserNotifications`: Retrieves user notifications
- `markAsRead`: Updates notification status
- `createNotification`: Creates new notification

## Database Schema

MongoDB document schemas for key collections:

### Startups Collection
```json
{
  "id": "string", // MongoDB ObjectId
  "name": "string",
  "logoUrl": "string",
  "tagline": "string",
  "description": "string",
  "industry": "string",
  "location": "string",
  "foundedYear": "number",
  "founderName": "string",
  "askAmount": "number",
  "raisedAmount": "number",
  "investors": "number",
  "equity": "number",
  "pitchDeck": "string", // URL to file
  "website": "string",
  "teamSize": "number",
  "featured": "boolean"
}
```

### Users Collection
```json
{
  "id": "string", // MongoDB ObjectId
  "name": "string",
  "email": "string",
  "password": "string", // hashed
  "walletBalance": "number"
}
```

### Investments Collection
```json
{
  "id": "string", // MongoDB ObjectId
  "userId": "string", // Reference to User
  "startupId": "string", // Reference to Startup
  "amount": "number",
  "date": "date",
  "equity": "number",
  "status": "string" // "pending", "completed", "failed"
}
```

### Notifications Collection
```json
{
  "id": "string", // MongoDB ObjectId
  "userId": "string", // Reference to User
  "type": "string", // e.g., "investment", "update"
  "title": "string",
  "content": "string", 
  "date": "string",
  "isRead": "boolean",
  "relatedId": "string", // ID of related entity
  "relatedType": "string" // Type of related entity
}
```

## Dependencies

### Frontend Dependencies
- **@tanstack/react-query**: Server state management
- **axios**: HTTP client
- **react-router-dom**: Routing
- **react-hook-form**: Form handling
- **tailwind-merge**: Utility for conditional CSS classes
- **clsx**: Class name construction
- **date-fns**: Date formatting and manipulation
- **lucide-react**: Icon library
- **recharts**: Chart components
- **zod**: Schema validation
- **sonner**: Toast notifications

### Backend Dependencies
- **spring-boot-starter-web**: Core web functionality
- **spring-boot-starter-data-mongodb**: MongoDB integration
- **spring-boot-starter-security**: Security features
- **spring-boot-starter-validation**: Input validation
- **springdoc-openapi-starter-webmvc-ui**: API documentation
- **jjwt-api**: JWT handling
- **lombok**: Boilerplate code reduction
- **jakarta.xml.bind-api**: XML binding

## Build and Deployment

### Frontend Build
- Vite builds optimized production assets
- Output directory: `/dist`
- Build command: `npm run build`

### Backend Build
- Maven builds executable JAR
- Build command: `mvn clean package`
- Output: `target/api-0.0.1-SNAPSHOT.jar`

### Environment Configuration
- Development: Local API and MongoDB
- Production: Deployed API with production database
- Preview/Demo: Mock data fallbacks

## Security Considerations

- JWT token for authentication
- Password hashing
- Input validation
- HTTPS for all communications
- MongoDB security best practices
- Cross-Origin Resource Sharing (CORS) configuration
- API rate limiting

## Testing Strategy

- Frontend unit tests with React Testing Library
- Backend unit tests with JUnit
- API integration tests
- End-to-end testing
- Cross-browser compatibility testing
- Mobile responsiveness testing

## Conclusion

StartupFundr utilizes a modern tech stack with clear separation of concerns between frontend and backend. The React frontend provides a responsive, intuitive user interface, while the Spring Boot backend offers robust API services backed by MongoDB. This documentation provides a comprehensive overview of the system architecture, key components, and technical implementation details for developers working with the platform.
