
import { productRequest } from "./productRequest";
import { review } from "./review";
import { User } from "./user";

export interface reviewDetails{
    user:User,
    product:productRequest,
    review:review
}