import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent{

  isChild = true;
  name = "";

  constructor(){
    console.log("Parent constructor is called");
    
  }

  ngOnInit(): void {
      console.log("Parent OnInit is called");
      
  }

  ngOnChanges(): void {
    console.log("Parent OnChanges is called");
    
}

ngDoCheck(): void{
  console.log("Parent DoCheck is called");
  
}

  toggleChild(){
    this.isChild = !this.isChild;
  }
}
