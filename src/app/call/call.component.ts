import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceCallService } from '../service-call.service';

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css'],
})
export class CallComponent implements OnInit {
  @Input() nombre:string = "";
  @Input() peso:number = 0;
  @Input() altura:number = 0;
  @Input() order:number= 0;


  constructor(){};

  ngOnInit(): void {}
}
