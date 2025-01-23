const router = require("express").Router();

// GET /health
router.get('/health', (req, res) => {
    res.end("Hello world");
});

// GET /about
router.get('/about', (req, res) => {
    res.end("This is about page");
});

// Middleware for validation
const ValidateData = (req, res, next) => {
    // TODO: Add validation logic here
    req.CustomField = "I am here";
    next();
};

// Handler for login logic
const LoginHandle = (req, res) => {
    // Access custom field set by middleware
    const customField = req.CustomField;

    // TODO: Add logic for parsing, validation, db query, etc.
    res.json({
        message: "Login successful",
        customField: customField,
    });
};

// POST /login with middleware
router.post('/login', ValidateData, LoginHandle);

// Export the router
module.exports = router;
