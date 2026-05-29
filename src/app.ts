import express  from "express";
import router from "./modules/routes";

const app = express();

app.use(express.json());

// JSON parse error handler
app.use((err: any, req: any, res: any, next: any) => {
    if (err instanceof SyntaxError && 'body' in err) {
        return res.status(400).json({
            success: false,
            message: "Invalid JSON format",
            errors: [
                {
                    field: "body",
                    message: err.message
                }
            ],
            data: null
        });
    }
    next(err);
});

app.use('/api', router);

export default app;