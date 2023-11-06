import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva',
  templateUrl: './diretiva.component.html',
  styleUrls: ['./diretiva.component.css']
})
export class DiretivaComponent {
  tamanho = '40px'; 
  fonte  = 'arial';
  cor = 'red';
  classes_css = ['titulo-verde', 'titulo-peuqeno'];
  sublinhado_css = 'titulo-sublinhado';

}
