import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";

@Injectable()
export class AdminService {

    constructor(private http:HttpClient){}

    fetchStudentsAll(){
        return this.http.get(environment.apiPath+"students");
    }
    registerStudent(studentData){
        return this.http.post(environment.apiPath+"students",studentData);
    }
}