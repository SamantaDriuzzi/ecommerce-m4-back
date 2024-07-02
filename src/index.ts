import { PORT } from "./config/envs";
import app from "./server";
import "reflect-metadata"
import { AppDataSource } from "./config/dataSource";
import { preLoadCategories } from "./helpers/preLoadCategories";
import { preLoadProducts } from "./helpers/preLoadProducts";

const initialize = async () => {
    console.log("Initializing server");
    const databaseUrl = process.env.DATABASE_URL;
    AppDataSource.setOptions({ url: databaseUrl, ssl: { rejectUnauthorized: false } });
    
    await AppDataSource.initialize();
    console.log("Database initialized");
    await preLoadCategories();
    await preLoadProducts();
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

initialize();

