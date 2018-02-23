var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;

var dbUtils = null;

exports.setup = function (db) {
    dbUtils = db;
}

exports.getUsers = function (req, res) {
    dbUtils.getUsers(function (err, results) {
        console.log(results);
        res.send(results);
    })
}

exports.login = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;

    dbUtils.login(email, password, function (err, data) {
        res.send((data && Object.keys(data).length !== 0));
    })
}

exports.register = function (req, res) {
    var data = req.body.data;
    dbUtils.register(data, function (err, data) { res.send(true)});
}

exports.getCategories = function(req, res) {
    dbUtils.getCategories(function(err, data) { res.send(data); });
}

exports.getProductDetails = function (req, res) {
    var id = req.params.id;
    dbUtils.getProductDetails(id, function (err, data) {
        
        console.log("product-details: " + data)

        var dataToSend = data;
        res.send(data);
    })
}

exports.getCategoryById = function (req, res) {
    var id = req.params.id;
    dbUtils.getCategoryById(id, function (err, data) {
        res.send(data);
    })
}

exports.saveProduct = function (req, res) {
    var productDetails = req.body.data;
    dbUtils.getNextSequence("productId", function (err, nextSeqId) {
        dbUtils.getCurrentSeq("productId", function (err, currSeqId) {
            productDetails.id = currSeqId[0].seq;
            dbUtils.saveProduct(productDetails, function (err, data) {
                res.send(JSON.stringify(productDetails.id));
            });
        })
    })
}

exports.getProducts = function (req, res) {
    dbUtils.getProducts(function (err, data) {
        res.send(data);
    })
}

exports.getProductsPaging = function (req, res) {
    var page = +req.params.page;
    var limit = +req.params.limit;

    dbUtils.getProductsPaging(page, limit, function (err, data) {
        res.send(data);
    })
}

exports.updateProduct = function (req, res) {
    var productToUpdate = req.body.data;
    var productId = req.body.data.id;
    var oldPrice = req.body.data.oldPrice;
    console.log(req.body);
    dbUtils.updateProduct(productId, productToUpdate, function (err, data) {

        // the price is changed
        if (oldPrice != productToUpdate.price) {
            dbUtils.addOldPriceToArray(productId, oldPrice, function (err, data) {
                console.log("after 2 updated");
                //res.send(true);
            })
        }

        res.send(true);
    })
}

exports.deleteProduct = function (req, res) {
    var productToUpdate = req.body.data;
    var productId = req.body.data.id;

    dbUtils.deleteProduct(productId, function (err, data) {
        res.send(true);
    })
}

exports.addCommentToProduct = function (req, res) {
    var productId = req.body.data.prodctId;
    var comment = req.body.data.comment;

    dbUtils.addCommentToProduct(productId, comment , function (err, data) {
        res.send(true);
    })
}


exports.getCheapestProductByCategory = function (req, res) {
    var id = req.params.id;
    dbUtils.getCheapestProductByCategory(id, function(err, data) {
        res.send(data);
    })
}

exports.saveBasket = function (req, res) {
    var details = req.body.data;
    dbUtils.getNextSequence("basketId", function (err, nextSeqId) {
        dbUtils.getCurrentSeq("basketId", function (err, currSeqId) {
            details.id = currSeqId[0].seq;

            dbUtils.saveBasket(details, function (err, data) {
                res.send(JSON.stringify(details.id));
            });
       });
    })
}

exports.getBasket = function (req, res) {
    var id = req.params.id;
    dbUtils.getBasket(id, function (err, data) {
        res.send(data);
    })
}

exports.getUserByUserName = function (req, res) {
    var userName = req.params.userName;
    console.log(userName);
    dbUtils.getUserByUserName(userName, function (err, data) {
        res.send(data);
    })
} 