import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.scss']
})
export class QuoteDetailComponent implements OnInit {


  @Input() quote!: Quote
  @Output() toDelete = new EventEmitter<boolean>()

  deleteQuote(getRid:boolean){
    this.toDelete.emit(getRid)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
