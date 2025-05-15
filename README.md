## Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Testing**: Cypress
- **CI/CD**: GitHub Actions
- **Hosting**: AWS (S3, CloudFront, Route 53)
- **Backend**: Serverless (Lambda, API Gateway, RDS MySQL)
- **Infrastructure**: Terraform

## Architecture

The application follows a modern serverless architecture:

- **Static Website**: Hosted on S3 and distributed via CloudFront
- **API Layer**: AWS API Gateway exposing Lambda functions
- **Backend Logic**: AWS Lambda functions for visitor counting
- **Database**: RDS MySQL for storing visitor data
- **DNS**: Route 53 for domain management
- **Infrastructure as Code**: All AWS resources managed with Terraform

## Features

- Responsive design for all device sizes
- Dynamic visitor counter
- Portfolio showcasing projects and skills
- Resume/CV page
- Contact information

## Local Development

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/resume-app.git
   cd resume-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Testing

```bash
npm run test
```

## Deployment

The website is automatically deployed through GitHub Actions when changes are pushed to the main branch.

## Backend Repository

The backend code for the visitor counter is available in a separate repository:
[resume-app-backend](https://github.com/pkpkvac/resume-app-backend)
