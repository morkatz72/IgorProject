exports.setupRoutes = function (app, db, dbUtils) {
    var basketModule = require('./modules/basketModule.js');

    basketModule.setup(dbUtils);

    app.get('/getUsers', basketModule.getUsers);
    // app.get('/login/:email/:password', basketModule.login);
    app.post('/login', basketModule.login);
    app.post('/register', basketModule.register);
    app.post('/saveProduct', basketModule.saveProduct);
    app.post('/updateProdct', basketModule.updateProduct);
    app.post('/deleteProduct', basketModule.deleteProduct);
    app.post('/addCommentToProduct', basketModule.addCommentToProduct);
    app.get('/getCategories', basketModule.getCategories);
    app.get('/getProductDetails/:id', basketModule.getProductDetails);
    app.get('/getCategory/:id', basketModule.getCategoryById);
    app.get('/getProducts', basketModule.getProducts);
    app.get('/getProductsPaging/:page/:limit', basketModule.getProductsPaging);

}