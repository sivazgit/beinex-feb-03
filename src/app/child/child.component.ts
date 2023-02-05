import { Component, ContentChild, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent  {

  @Input()
  name = "";

  @ContentChild('parentContent', {static:true}) parentContent:any;
  @ViewChild('childContent', {static:true}) childContent:any;

  constructor(){
    console.log("Child constructor is called");
    
  }

  ngOnInit(){
      console.log("Child OnInit is called");
      console.log("OnInit - " + this.parentContent);
      console.log("OnInit - " + this.childContent);
      
      
  }

  ngOnDestroy(){
      console.log("Child onDestroy is called");
      
  }

  ngOnChanges(){
    
    console.log("Child OnChanges is called");
    console.log("OnChanges - " + this.parentContent);
    console.log("OnChanges - " + this.childContent);
}

ngDoCheck(){
  console.log("Child DoCheck is called");
  console.log("DoCheck - " + this.parentContent);
  console.log("DoCheck - " + this.childContent);
}

ngAfterContentInit(){
  console.log("in After Content Init");
  console.log("After Content Init - " + this.parentContent);
  console.log("Aftre Content Init - " + this.childContent);
  
}

ngAfterContentChecked(){
  console.log("in After Content Checked");
  console.log("Aftre Content Checked - " + this.childContent);
}

ngAfterViewInit(){
  console.log("in After View Init");
  console.log("Aftre View Init - " + this.childContent);
}

ngAfterViewChecked(){
  console.log("in After View Checked");
}

}
