import { Component } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {  
  
  isModalShow = false;
  htmlData;
  subscription:Subscription;

  constructor(
    private sanitizer: DomSanitizer,
    private modalService:ModalService) {
    console.log('modal');
    this.subscription = this.modalService.onModalStatus().subscribe(response=>{
      console.log('response: ',response);
      this.isModalShow = response.status;  
      this.htmlData = this.sanitizer.bypassSecurityTrustHtml(response.html);  ;
      console.log('this.htmlData: ',this.htmlData);
    },
    error=>{
      console.log('error:', error)
    })
   }

  closeModal(){    
    this.isModalShow = false;
  }
  
  saveModal(){
    console.log('save modal()');
  }

}