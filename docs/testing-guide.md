
# StartupFundr Testing Guide

This document provides comprehensive testing procedures for each component of the StartupFundr platform.

## Testing Environment Setup

### Prerequisites
- Running backend server (Java Spring Boot) on port 8081
- Frontend development server running on port 5173 (default Vite port)
- MongoDB instance accessible to the backend
- Modern web browser (Chrome/Firefox/Safari)

### Initial Setup
1. Start the backend server:
   ```bash
   cd src/backend
   mvn spring-boot:run
   ```

2. Start the frontend development server:
   ```bash
   cd src
   npm run dev
   ```

## User Authentication Testing

### Registration (Signup) Testing
1. Navigate to `/signup`
2. Test form validation:
   - Submit empty form → Should show validation errors
   - Enter invalid email → Should show email validation error
   - Enter mismatched passwords → Should show password match error
   - Enter password less than 8 characters → Should show password length error
3. Test successful registration:
   - Fill all fields with valid data
   - Select account type (investor/startup)
   - Submit form → Should redirect to dashboard
   - Check localStorage for token and user data

### Login Testing
1. Navigate to `/login`
2. Test form validation:
   - Submit empty form → Should show validation errors
   - Enter invalid email → Should show email validation error
   - Enter invalid password → Should show password error
3. Test invalid credentials:
   - Enter valid email with wrong password → Should show authentication error message
4. Test successful login:
   - Enter valid credentials → Should redirect to dashboard
   - Check localStorage for token and user data

### Authentication Persistence Testing
1. Login successfully
2. Refresh page → Should remain logged in
3. Close browser and reopen → Should remain logged in
4. Test protected routes:
   - Attempt to access `/dashboard` while logged out → Should redirect to login
   - Attempt to access `/profile` while logged out → Should redirect to login

### Logout Testing
1. Login successfully
2. Click logout button → Should redirect to homepage
3. Check localStorage → Token and user data should be removed
4. Attempt to access protected routes → Should redirect to login

## Startup Browsing and Discovery

### Startups Listing Testing
1. Navigate to `/startups`
2. Verify startups are loaded and displayed correctly
3. Test filtering:
   - Filter by industry → Should show only startups in selected industry
   - Filter by funding amount → Should show startups within range
   - Filter by location → Should show startups in selected location
4. Test search functionality:
   - Search by startup name → Should show matching startups
   - Search by description keywords → Should show relevant startups

### Startup Detail Testing
1. From startups listing, click on a startup
2. Verify redirect to `/startups/:id` with correct startup ID
3. Verify all startup information is displayed:
   - Name, logo, description
   - Funding progress
   - Team information
   - Investment metrics
4. Test investment button visibility:
   - When logged in → Should be visible
   - When logged out → Should prompt to login

## Investment Flow Testing

### Investment Modal Testing
1. Navigate to startup detail page
2. Click "Invest Now" button
3. Verify investment modal opens
4. Test input validation:
   - Enter amount below minimum → Should show error
   - Enter amount above maximum → Should show error
   - Enter non-numeric value → Should show error
5. Test successful investment:
   - Enter valid amount
   - Click confirm → Should show success message
   - Verify investment appears in user portfolio

### Investment Portfolio Testing
1. Login as investor
2. Navigate to `/portfolio`
3. Verify all user investments are displayed
4. Check accuracy of investment metrics:
   - Total invested amount
   - Number of startups invested in
   - Equity percentage per startup

## Dashboard Functionality

### Investor Dashboard Testing
1. Login as investor
2. Navigate to `/dashboard`
3. Verify dashboard components:
   - Investment summary
   - Recent startups invested in
   - Recommended startups
   - Activity feed
4. Test interactive elements:
   - Click on startup card → Should navigate to startup detail
   - Click on "Explore More" → Should navigate to startups listing

### Startup Dashboard Testing
1. Login as startup
2. Navigate to `/dashboard`
3. Verify dashboard components:
   - Funding progress
   - Investor statistics
   - Fundraising timeline
   - Campaign management options
4. Test campaign management:
   - Edit startup profile → Should update information
   - Post updates → Should appear in activity feed

## User Profile Testing

### Profile View and Edit Testing
1. Login as any user
2. Navigate to `/profile`
3. Verify profile information is correct
4. Test profile editing:
   - Change name → Should update in UI
   - Change email → Should require verification
   - Upload new profile image → Should display new image
5. Test password change:
   - Enter incorrect current password → Should show error
   - Enter mismatched new passwords → Should show error
   - Enter correct information → Should update password

## Responsive Design Testing

### Mobile Responsiveness Testing
1. Use browser dev tools to simulate various device sizes:
   - Mobile phones (320px-480px width)
   - Tablets (768px-1024px width)
   - Desktop (1024px+ width)
2. For each page, verify:
   - No horizontal scrolling
   - All content is accessible
   - Navigation menu collapses appropriately
   - Forms are usable
   - Text is readable without zooming

### Browser Compatibility Testing
1. Test the application on multiple browsers:
   - Chrome
   - Firefox
   - Safari
   - Edge
2. Verify consistent appearance and functionality across browsers

## API Integration Testing

### API Response Testing
1. Use browser developer tools (Network tab)
2. Navigate through various pages and verify:
   - API calls are made with correct endpoints
   - Authentication headers are sent properly
   - Responses are handled correctly (success and error cases)

### Error Handling Testing
1. Simulate network errors:
   - Disable internet connection → Should show appropriate error messages
   - Slow connection → Should show loading indicators
2. Simulate server errors:
   - Modify API calls to invalid endpoints → Should handle 404 errors
   - Test backend validation → Should display validation errors from server

## Performance Testing

### Load Time Testing
1. Use browser developer tools (Network tab)
2. Measure initial page load time
3. Measure time to interactive
4. Test under different network conditions:
   - Fast connection
   - 3G/4G simulation

### Rendering Performance Testing
1. Use browser developer tools (Performance tab)
2. Analyze component rendering time
3. Check for layout shifts
4. Verify smooth scrolling and animations

## Security Testing

### Authentication Security Testing
1. Test token expiration:
   - Login and wait for token expiration
   - Verify user is prompted to login again
2. Test XSS protection:
   - Attempt to input script tags in form fields
   - Verify they are properly escaped
3. Check CORS configuration:
   - Verify API requests from allowed origins succeed
   - Verify requests from unauthorized origins fail

### Form Security Testing
1. Test input validation:
   - Attempt SQL injection in form fields
   - Attempt to submit extremely large inputs
   - Verify all inputs are properly sanitized

## Regression Testing

### Feature Regression Testing
After any significant change:
1. Verify critical user flows still work:
   - Authentication
   - Startup browsing
   - Investment process
   - Dashboard functionality
2. Check for visual regressions:
   - Compare UI elements to design specifications
   - Verify consistent styling across pages

## Integration Testing with Backend

### Authentication Integration Testing
1. Verify frontend authentication properly integrates with backend JWT service
2. Test token refresh mechanism
3. Verify user sessions persist correctly

### Data Fetching Integration Testing
1. Verify data from backend is correctly displayed in frontend
2. Test pagination of data
3. Verify filtering and sorting operations correctly query the backend
4. Check data consistency across different views

## Automated Testing (Future Implementation)

### Unit Tests
1. Define critical components for unit testing
2. Create test cases for:
   - Authentication flows
   - Form validation
   - Data transformation functions
   - Component rendering

### End-to-End Tests
1. Define critical user journeys for E2E testing
2. Set up testing environment with tools like Cypress or Playwright
3. Implement tests for core flows:
   - User registration and login
   - Startup browsing and filtering
   - Investment process

## Issue Reporting

When finding issues during testing:
1. Document the exact steps to reproduce
2. Note the expected vs. actual behavior
3. Include screenshots if applicable
4. Note browser/device information
5. Document network requests if relevant
6. Assign priority level (critical, high, medium, low)
