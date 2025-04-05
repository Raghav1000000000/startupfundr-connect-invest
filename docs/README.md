
# StartupFundr Project Documentation

## Project Overview
StartupFundr is a platform that connects startups seeking funding with potential investors. It provides a streamlined process for startups to create fundraising campaigns and for investors to discover and invest in promising ventures.

## Documentation Structure

This documentation is organized into four main sections:

1. [Frontend Documentation](./frontend.md) - Details on React/TypeScript implementation, components, and UI structure
2. [Backend Documentation](./backend.md) - Information about the Java Spring Boot API and service architecture
3. [UI/UX Documentation](./uiux.md) - Design system, user flows, and interface guidelines
4. [Database Documentation](./database.md) - MongoDB schema design and data relationships

## Development Status

The project is currently in active development. Below is a high-level overview of the current status:

### Implemented Features
- Basic frontend pages and component structure
- Core backend API endpoints for startups and success stories
- Initial database models and repositories
- Basic design system and UI components

### In Progress
- Authentication system
- Investment processing
- User dashboard functionality
- Data fetching integration between frontend and backend

### Next Steps
- Complete the authentication system
- Implement the investment flow
- Enhance user profiles and dashboards
- Add notification system
- Improve search and discovery features

## Getting Started

### Prerequisites
- Node.js and npm for frontend development
- Java 17+ for backend development
- MongoDB for database

### Running the Frontend
```bash
cd src
npm install
npm run dev
```

### Running the Backend
```bash
cd src/backend
mvn spring-boot:run
```

## Project Structure
- `/src` - Frontend source code
- `/src/backend` - Backend source code
- `/docs` - Project documentation

## Contributing
Please refer to the specific documentation files for guidelines on contributing to different aspects of the project.

## License
[Include license information here]
