
# StartupFundr Database Documentation

## Overview
StartupFundr uses MongoDB, a document-oriented NoSQL database, for data storage. The database design follows a document model approach, allowing for flexible schema evolution while maintaining relationships between different data entities.

## Current Implementation

### Database Technology
- **MongoDB**: NoSQL document database
- **Spring Data MongoDB**: For Java integration

### Collections (Tables)

#### Startups Collection
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
  "featured": "boolean",
  "createdAt": "date",
  "updatedAt": "date"
}
```

#### Success Stories Collection
```json
{
  "id": "string", // MongoDB ObjectId
  "startupId": "string", // Reference to Startup
  "title": "string",
  "summary": "string",
  "content": "string",
  "industry": "string",
  "imageUrl": "string",
  "raisedAmount": "number",
  "investors": "number",
  "campaignDays": "number",
  "foundedYear": "number",
  "publishedAt": "date",
  "featured": "boolean"
}
```

#### Users Collection
```json
{
  "id": "string", // MongoDB ObjectId
  "name": "string",
  "email": "string",
  "password": "string", // hashed
  "walletBalance": "number",
  "investments": [
    {
      "id": "string",
      "startupId": "string",
      "amount": "number",
      "date": "date",
      "equity": "number"
    }
  ]
}
```

### Repository Implementations
- **StartupRepository**: Basic CRUD and custom queries
- **SuccessStoryRepository**: Basic CRUD and custom queries
- **UserRepository**: Finding users by email, checking email existence
- **InvestmentRepository**: Not fully implemented yet

### Data Access Patterns
- Standard CRUD operations
- Query by ID
- Query by fields (email, industry)
- Custom queries for featured and recent items

## Remaining Tasks

### Collection Design

#### Investments Collection (to be separated from Users)
```json
{
  "id": "string",
  "userId": "string", // Reference to User
  "startupId": "string", // Reference to Startup
  "amount": "number",
  "date": "date",
  "equity": "number",
  "status": "string", // "pending", "completed", "failed"
  "transactionId": "string" // Reference to payment transaction
}
```

#### Transactions Collection (to be implemented)
```json
{
  "id": "string",
  "userId": "string", // Reference to User
  "amount": "number",
  "type": "string", // "deposit", "withdrawal", "investment"
  "status": "string", // "pending", "completed", "failed"
  "date": "date",
  "reference": "string" // External payment reference
}
```

#### Posts Collection (for startup updates)
```json
{
  "id": "string",
  "startupId": "string", // Reference to Startup
  "title": "string",
  "content": "string",
  "imageUrl": "string",
  "date": "date",
  "likes": "number",
  "comments": "number"
}
```

#### Comments Collection
```json
{
  "id": "string",
  "userId": "string", // Reference to User
  "postId": "string", // Reference to Post
  "content": "string",
  "date": "date"
}
```

#### Notifications Collection
```json
{
  "id": "string",
  "userId": "string", // Reference to User
  "type": "string", // e.g., "investment", "update", "milestone"
  "title": "string",
  "content": "string",
  "date": "date",
  "read": "boolean",
  "relatedId": "string", // ID of related entity
  "relatedType": "string" // Type of related entity
}
```

### Database Features to Implement

#### Indexing Strategy
- Create indexes for frequently queried fields
- Compound indexes for complex queries
- Text indexes for search functionality

#### Data Validation
- JSON Schema validation for MongoDB documents
- Consistent data validation between database and API

#### Data Relationships
- Implement proper references between collections
- Consider embedded vs. referenced document strategy for each relationship

#### Query Optimization
- Projection to limit field retrieval
- Pagination for large data sets
- Aggregation pipelines for complex data transformations

#### Security Features
- Field-level encryption for sensitive data
- Access control at database level
- Audit logging of database operations

### Technical Improvements
- **Migration Strategy**: Tools and procedures for schema evolution
- **Backup and Recovery**: Regular backup procedures
- **Monitoring**: Database performance monitoring
- **Scaling Strategy**: Plan for horizontal scaling as data grows

### Repository Enhancements
- **Advanced Queries**: More sophisticated query methods
- **Aggregation**: Methods for data aggregation and reporting
- **Pagination**: Efficient data pagination for all list endpoints
- **Transaction Support**: Multi-document transaction handling

## Data Management Considerations
- **Data Lifecycle**: Policies for data retention and archiving
- **Performance**: Monitoring and optimization strategies
- **Data Integrity**: Consistency checks and validation
- **Compliance**: Data protection and regulatory compliance measures
