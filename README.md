## Running the project locally
1. Clone the repository
2. Create a copy from ```.env.template``` rename it to ```.env``` and change the environment variables
3. Install dependencies running ```npm install```
4. Initialize DB running ```docker compose up -d```
5. Run prisma migration with the command ```npx prisma migrate dev```
6. Run the project with the following command ```npm run dev```
