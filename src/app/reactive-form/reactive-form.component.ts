import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  show:string ;
  countries :any[] ;
  selectedCountryCode1:any;
  states:any;
  selectedState1:any;
  selectedCountryCode2:any;
  num1 :number;
  num2 :number;
  operation:any;
  expr :string;
  operations :any;
  captchaResult :any;
  op :any;
  actualCaptchaResult :any;
  selectedState2:any;
  rf ="registrationForm.controls"
  submitted :boolean;
  mailreg:any;
  mobilereg:any;
  
 
 
  
  constructor() { 
    this.show = "grp1";
    this.countries =  [
                      {name:"Australia" , code:"AUS"},
                      {name :"America", code:"US" },
                      {name:"Canada", code:"CA"},
                      {name :"India", code:"IN"},
                      {name:"Romainia", code:"RO"},
                      {name: "Russia",code:"RU"},
                      {name:"Switzerland",code:"SW"}
                    ];
    this. selectedCountryCode1= null;
    this.selectedState1 = null;
    this. selectedCountryCode2= null;
    this.selectedState2 = null;
    this.states = { "AUS": ["Australian Capital Territory","New South Wales","Northern Territory","Queensland","South","Australia","Tasmania","Victoria","Western Australia"],
                    "US" : ["Alabama.Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","New York", "Wisconsin","Wyoming"],
                    "IN" : ["Andhra Pradesh","Arunachal Pradesh","Assam,Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Odisha"],
                    "RO" : ["Alba","Arad","Arges","Bacau","Bihor","Bistrita-Nasaud","Botosani","Braila","Brasov","Bucuresti","Buzau"],
                    "RU" : ["Adygeya","Aginskiy Buryatskiy","Altay","Altayskiy","Amurskaya","Arkhangel","skaya","Astrakhanskaya","Bashkortostan"],
                    "SW" : ["Aargau","Ausser-Rhoden","Basel-Landschaft","Basel-Stadt","Bern","Fribourg","Geneve","Glarus","Graubunden","Inner-Rhoden","Jura,Luzern","Neuchatel"]
                    
    }
    this.num1= Math.round((100-10)*Math.random() +10 );
    
    this.num2= Math.round((100-10)*Math.random() + 10);
    this.operations = ['*','/','+','-'];
    this.expr = "";
    this.captchaResult = null;
    this.op ="";
    this.actualCaptchaResult = null;
    this.submitted = false;
    this.mailreg="[a-zA-Z0-9\.-]+@[a-zA-Z0-9-]+[.]+[a-z]{2,4}";
    this.mobilereg="[0-9]{10}";
    

    
    
  }

  ngOnInit(): void {
  }
  /*
  myData = {
    firstName :"swathi",
    lastName :"mothukuri",
    dob :"2040-07-03"
  }
  myData2 = {
    firstName :"swathi",
    lastName :"mothukuri",

  }*/
  registrationForm = new FormGroup({
    firstName:new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName :new FormControl('',[Validators.required,Validators.minLength(3)]),
    email     : new FormControl('',Validators.required),
    password1  : new  FormControl('',[Validators.required,Validators.minLength(8)]),
    password2 :new FormControl('',[Validators.required,Validators.minLength(8)]),
    mobile1  : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    mobile2  : new FormControl('',[Validators.minLength(10),Validators.minLength(10),Validators.maxLength(10)]),
    gender   :    new FormControl('',[Validators.required]),
    currentAddress  : new FormControl('',[Validators.required]),
    currentCountry  : new FormControl('null',[Validators.required]),
    currentState   : new FormControl('null',[Validators.required]),
    currentCity    :    new FormControl('',[Validators.required]),
    permanentAddress :new FormControl(),
    permanentCountry  : new FormControl(),
    permanentState  :  new FormControl(),
    permanentCity   :  new FormControl(),
    captchaResult    : new FormControl('',[Validators.required]),
    captchaExpression   :  new FormControl(),
    subscription   :    new FormControl('y')
    

  })
  
  /*
  reactiveForm = new FormGroup( {
    Name:new FormControl(''),
    Mail:new FormControl('',[Validators.required]),
    Password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    Password2:new FormControl('',[Validators.required,Validators.minLength(8)]),
  });
*/
mailPattern(){
  var mail;
  mail = this.registrationForm.controls['email'].value;
  if(!mail.match(this.mailreg)){
    return false;
  }
  else{
    return true;
  }
}

mobilelPattern(){
  var mobile;
  mobile = this.registrationForm.controls['mobile1'].value;
  if(!mobile.match(this.mobilereg)){
    return false;
  }
  else{
    return true;
  }
}
  
  save(){
    console.log(this.registrationForm.value);
    this.submitted =true;
  }
  /*
  clear(){
    this.registrationForm.reset();
  }
  fill(){
    this.registrationForm.setValue(this.myData)
  }
  fill2(){
    this.registrationForm.patchValue(this.myData2)

  }
  */
  

  /*
  registrationForm = new FormGroup({
    firstNmae : new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName  : new FormControl('',[Validators.required,Validators.minLength(3)]),
    email     : new FormControl(),
    password  : new  FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword :new FormControl('',[Validators.required,Validators.minLength(8)]),
    mobile1  : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    mobile2  : new FormControl('',[Validators.minLength(10),Validators.maxLength(10)]),
    gender   :    new FormControl('',[Validators.required]),
    currentAddress  : new FormControl('',[Validators.required]),
    currentCountry  : new FormControl('',[Validators.required]),
    currentState   : new FormControl('',[Validators.required]),
    currentCity    :    new FormControl('',[Validators.required]),
    permanentAddress :new FormControl(),
    permanentCountry  : new FormControl(),
    permanentState  :  new FormControl(),
    permanentCity   :  new FormControl(),
    captchResult    : new FormControl('',[Validators.required]),
    captchExpression   :  new FormControl(this.generateCaptcha()),
    subscription   :    new FormControl()
})

showGrp2(){
  this.show = "grp2";
  

}
showGrp1(){
  this.show = "grp1";
}
generateCaptcha(){ 
  this. num1     =  Math.round((100-10)*Math.random() +10 );
  this.num2      =  Math.round((100-10)*Math.random() + 10);
  let x          =  (Math.round(10*Math.random()))%4;
  this .op        =  this.operations[x]; 
   return this.num1 + this.op  + this.num2;
}
*/
validateCaptcha(){
 
  switch(this.op){
    case "+":
      this.actualCaptchaResult =this.num1 + this.num2;
      break;
    case "-":
      this.actualCaptchaResult =this.num1 - this.num2;
      break;
    case "*":
      this.actualCaptchaResult =this.num1 * this.num2;
      break;
    case "/":
      this.actualCaptchaResult =Math.floor(this.num1 / this.num2);
      break;
  }

}



generateCaptcha(){ 
  this. num1     =  Math.round((100-10)*Math.random() +10 );
  this.num2      =  Math.round((100-10)*Math.random() + 10);
  let x          =  (Math.round(10*Math.random()))%4;
  this .op        =  this.operations[x]; 
   this.expr = this.num1 + this.op  + this.num2;
}
showGrp2(){
  this.show = "grp2";
  

}
showGrp1(){
  this.show = "grp1";
}





}
