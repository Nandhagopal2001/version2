import { FormGroup } from "@angular/forms";

export function Confirmvalidator(cn:string,mcn:string){
  return (formgroup:FormGroup)=>{
    const pass=formgroup.controls[cn];
    const cpass=formgroup.controls[mcn];
    if(pass.value!==cpass.value){
      cpass.setErrors({Confirmvalidator:true})

    }
    else{
      cpass.setErrors(null);
    }
  }

}

