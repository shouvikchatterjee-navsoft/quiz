import { Component, OnInit } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  numberOfButtons = 5;
  btnArr = [];
  dataArr = [];
  isModalShow = false;
  title;
  bodyText;

  constructor(private dataService:DataService,private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    for (let i = 1; i <= this.numberOfButtons; i++) {
      this.btnArr.push(i);
    }
  }

  showModal(button) {
    this.isModalShow = true;
    const data = this.dataService.data;
    // console.log('data:', data);
    for(let i=0;i<data.length;i++){
      if(button == data[i].button){
        this.title = this.sanitizer.bypassSecurityTrustHtml(data[i].title);
        this.bodyText = this.sanitizer.bypassSecurityTrustHtml(data[i].bodyText); //To display the HTML content in proper format
        break;
      }
    }
  }
  saveModal(){
    console.log('save modal()');
  }
  closeModal(){    
    this.isModalShow = false;
  }
   
}