import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import {
  getProductsService,
  productByIdService,
} from "../services/products.service";
import { Product } from "../entities/Product";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const getProductsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product: Product = await productByIdService(parseInt(id));
  res.status(200).json(product);
};
