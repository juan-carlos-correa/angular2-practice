import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-component',
  templateUrl: 'input.component.html',
  styleUrls: ['input.component.css']
})

export class InputComponent{
  @Input() voto:string;
  @Output() addVoto = new EventEmitter<string>();
  contructor(){
    console.log('bien');
  }

  votar():void{
    this.addVoto.emit(this.voto);
  }
}
