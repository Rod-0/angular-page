import { Component,OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import {Subscription} from 'rxjs';

import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'angular-page';
  faPlus=faPlus;
  showAddTask: boolean=true;
  subscription!: Subscription;
 constructor(private uiService:UiService){}

 ngOnInit(): void {}

 toggleAddTask(){
  this.uiService.toggleAddTask();
 }
  
}
