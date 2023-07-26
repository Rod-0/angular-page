import { Component,OnInit,Input,Output,EventEmitter  } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button-plus',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponentPlus implements OnInit {
  faPlus=faPlus;
  @Input()
  text!: string;
  @Input()
  color!: string;
  @Output() btnClick=new EventEmitter()
  constructor(){}

  ngOnInit(): void {
      
  }

  onClick(){
    this.btnClick.emit();
  }

}
