import { image } from "./image";
import { product } from "./product";

export interface productRequest{
    product:product
    image:Array<image>
}