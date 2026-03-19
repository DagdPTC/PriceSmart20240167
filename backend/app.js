import express from "express"
import productRoutes from "./src/routes/products.js"
import branchesRoutes from "./src/routes/branches.js"
import employeeRoutes from "./src/routes/employee.js"
import reviewsRoutes from "./src/routes/reviewsRoutes.js"

const app = express();

//Que acepte JSON desde postman
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/branches", branchesRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/reviews", reviewsRoutes);


export default app;
