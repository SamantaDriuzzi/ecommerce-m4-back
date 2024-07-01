import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find();
};


export const productByIdService = async (
  id: number
): Promise<Product> => {
  const product = await ProductRepository.findOneBy({ id });
  if (product) {
    return product;
  } else {
    throw Error("Product not found");
  }
};