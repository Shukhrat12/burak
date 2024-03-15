import Errors from "../libs/Errors";
import { Request, Response } from "express";
import { T } from "../libs/types/common";
import ProductService from "../models/Product.service";

const productService = new ProductService();

const productController: T = {};

productController.getAllProducts = async (req: Request, res: Response) => {
    try {
        console.log('getAllProducts')
        res.render("products")
    } catch (error) {
        console.log("Error, getAllProducts", error)
        if (error instanceof Errors) res.status(error.code).json(error)
        else res.status(Errors.standard.code).json(Errors.standard);
    }
}

productController.createNewProduct = async (req: Request, res: Response) => {
    try {
        console.log('createNewProduct')
        res.send("DONE!")
    } catch (error) {
        console.log("Error, createNewProduct", error)
        if (error instanceof Errors) res.status(error.code).json(error)
        else res.status(Errors.standard.code).json(Errors.standard);

    }
}

productController.updateChosenProduct = async (req: Request, res: Response) => {
    try {
        console.log('updateChosenProduct')
    } catch (error) {
        console.log("Error, updateChosenProduct", error)
        if (error instanceof Errors) res.status(error.code).json(error)
        else res.status(Errors.standard.code).json(Errors.standard);

    }
}

export default productController;