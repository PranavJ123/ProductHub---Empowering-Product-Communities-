import { productRequest } from "./productRequest";
import { reviewRequest } from "./reviewRequest";
import { User } from "./user";

export interface reviewRequestDetails{
    user:User,
    product:productRequest,
    request:reviewRequest
}