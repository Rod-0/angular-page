import { Component,Output,EventEmitter   } from '@angular/core';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-minus',
  templateUrl: './button-minus.component.html',
  styleUrls: ['./button-minus.component.css']
})
export class ButtonMinusComponent {
  faMinus=faMinus;

  @Output() btnClick=new EventEmitter()

  constructor(){}

  ngOnInit(): void {
      
  }

  onClick(){
    this.btnClick.emit();
  }

}
