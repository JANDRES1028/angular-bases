import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',

})
export class ListadoComponent  {



  heroes: string []= ['Goku','SpiderMan','Superman','Yamcha','Thor'];
  heroeBorrado : string = '';

  borrarHeroe(){
    const heroeBorrado = this.heroes.shift() || '';
    console.log(heroeBorrado);

  }

}
