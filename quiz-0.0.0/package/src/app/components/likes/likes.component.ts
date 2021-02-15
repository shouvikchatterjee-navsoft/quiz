import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit {
  isSelected:boolean = false;
  likesCount:number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.likesCount += (this.isSelected) ? 1 : -1;
    this.isSelected = !this.isSelected;
    console.log('likesCount: ', `${this.likesCount}`, 'isSelected:', `${this.isSelected}`);
  }
}