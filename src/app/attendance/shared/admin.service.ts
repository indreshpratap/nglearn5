import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Injectable } from "@angular/core";
import { RestService } from "./rest.service";

@Injectable()
export class AdminService {

    constructor(private rest:RestService){}

    fetchStudentsAll(){
        return this.rest.fetch("students");
    }
    registerStudent(studentData){
        return this.rest.post("students",studentData);
    }
}