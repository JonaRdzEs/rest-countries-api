Follow these steps to run the project locally:

### 1. Clone the Repository

### 2. Set Up Environment Variables
Create a copy of the ```.env.template``` file and rename it to ```.env```, then update your environment variables.

### 3. Install Dependencies
Run the following command:
``` npm install ```

### 4. Start the Database with Docker
Make sure Docker is running:
``` docker compose up -d ```

### 5. Apply Prisma Migrations
``` npx prisma migrate dev ```

### 6. Seed the Database  
Run the following command to populate the database with initial data:
``` npm run seed ```

### 7. Run the Development Server
``` npm run dev ```

The app should now be running on http://localhost:3000

