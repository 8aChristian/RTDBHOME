import { Component } from '@angular/core';
import { Database, object, ref, set } from '@angular/fire/database'; // Importa el método set para actualizar la base de datos

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  espacios: { nombre: string, estado: boolean }[] = []; // Declaración explícita del tipo de espacios

  constructor(private database: Database) {}

  ngOnInit() {
    const route = ref(this.database, 'casa');
    object(route).subscribe(attributes => {
      this.espacios = [
        { nombre: 'Baño', estado: attributes.snapshot.val().Baño },
        { nombre: 'Cocina', estado: attributes.snapshot.val().Cocina },
        { nombre: 'Comedor', estado: attributes.snapshot.val().Comedor },
        { nombre: 'Dormitorio', estado: attributes.snapshot.val().Dormitorio },
        { nombre: 'Estudio', estado: attributes.snapshot.val().Estudio },
        { nombre: 'Sala', estado: attributes.snapshot.val().Sala }
      ];
    });
  }

  toggleLight(espacio: { nombre: string, estado: boolean }) {
    espacio.estado = !espacio.estado;
    const route = ref(this.database, 'casa/' + espacio.nombre); // Ruta específica para el espacio actual
    set(route, espacio.estado); // Actualiza el estado en la base de datos
  }
}
