//Creo un array de métodos
const productController = {};

//Import del Schema de la coleccion
//que vammos a ocupar 

import productsModel from "../models/products.js"

//SELECT

productController.getProducts = async (req, res) => {
    const products = await productsModel.find()
    res.json(products)
}

//INSERT
