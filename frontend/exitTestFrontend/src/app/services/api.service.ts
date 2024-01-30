import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../model/product';
import { productRequest } from '../model/productRequest';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://localhost:8087'

  constructor(private httpClient:HttpClient) { }

  public register(user:any){
    var url = `${this.BASE_URL}/addUser`
    return this.httpClient.post<any>(url,user);
  }

  public login(user:any){
    var url = `${this.BASE_URL}/auth`
    return this.httpClient.post<any>(url,user);
  }

  public getUserById(user:any){
    var url = `${this.BASE_URL}/user`
    return this.httpClient.post<any>(url,user);
  }

  public adminAuth(credential:any){
    var url = `${this.BASE_URL}/adminAuth`
    return this.httpClient.post<any>(url,credential)
  }

  public addProduct(product:any){
    var url = `${this.BASE_URL}/product`
    return this.httpClient.post<any>(url,product)
  }

  public getProduct(){
    var url = `${this.BASE_URL}/product`
    return this.httpClient.get<any>(url);
  }
  public getProductById(id:number){
    var url = `${this.BASE_URL}/getProductById?id=${id}`
    return this.httpClient.get<productRequest>(url);
  }
  public getProductByCriteria(criteria:any){
    var url = `${this.BASE_URL}/products?name=${criteria['name']}&code=${criteria['code']}&brand=${criteria['brand']}`
    return this.httpClient.get<any>(url);
  }


  public getReviewsByProductId(productId:any){
    var url = `${this.BASE_URL}/review/getByProduct?productId=${productId}`
    return this.httpClient.get<any>(url);

  }
  public requestForReview(request:any){
    var url = `${this.BASE_URL}/reviewRequest/request`
    return this.httpClient.post<any>(url,request);
  }

  public approveRequestOfReview(option:any){
    var url = `${this.BASE_URL}/reviewRequest/approve`
    return this.httpClient.post<any>(url,option);
  }

  public rejectRequestOfReview(option:any){
    var url = `${this.BASE_URL}/reviewRequest/reject`
    return this.httpClient.post<any>(url,option);
  }

  public getReviewRequestStatusById(option:any){
    var url = `${this.BASE_URL}/reviewRequest/statusById`
    return this.httpClient.post<any>(url,option);
  }

  public getReviewRequestStatus(option:any){
    var url = `${this.BASE_URL}/reviewRequest/status`
    return this.httpClient.post<any>(url,option)
  }

  public getAllReviewRequest(){
    var url = `${this.BASE_URL}/reviewRequest`
    return this.httpClient.get<any>(url);
  }

  public requestReview(review:any){
    var url = `${this.BASE_URL}/review/request`
    return this.httpClient.post<any>(url,review)
  }

  public approveReview(review:any){
    var url = `${this.BASE_URL}/review/approve`
    return this.httpClient.post<any>(url,review)
  }

  public rejectReview(review:any){
    var url = `${this.BASE_URL}/review/reject`
    return this.httpClient.post<any>(url,review)
  }

  public getReviewStatusById(review:any){
    var url = `${this.BASE_URL}/review/statusById`
    return this.httpClient.post<any>(url,review)
  }

  public getReviews(option:any){
    var url = `${this.BASE_URL}/review/status`
    return this.httpClient.post<any>(url,option)
  }

  public getAllReviews(){
    var url = `${this.BASE_URL}/review`
    return this.httpClient.get<any>(url);
  }
  public getAllStats(){
    var url = `${this.BASE_URL}/stats`
    return this.httpClient.get<any>(url)
  }

}
