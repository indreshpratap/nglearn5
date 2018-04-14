import { AbstractControl, FormControl } from "@angular/forms";

export function pincode(ctrl:FormControl){
    if(ctrl.value && (/^\d{6}$/.test(ctrl.value)===false)){
    return {"pincode":true}; // error type of pincode
    }else {
        return null;// no error
    }

}