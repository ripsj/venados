import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { JugadorModalData } from '../JugadorModalData';

@Component({
  selector: 'app-modal-jugador',
  templateUrl: './modal-jugador.component.html',
  styleUrls: ['./modal-jugador.component.css']
})
export class ModalJugadorComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalJugadorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: JugadorModalData) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit() {
  }

}
