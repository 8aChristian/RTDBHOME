import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, provideFirebaseApp(() => initializeApp({"projectId":"rtdb-iot-5309b","appId":"1:661199907590:web:23cb19d154b7a59a6c0c87","databaseURL":"https://rtdb-iot-5309b-default-rtdb.firebaseio.com","storageBucket":"rtdb-iot-5309b.appspot.com","apiKey":"AIzaSyAOyhjEsYSNnOWnUic9QMUlmK5mhrCKu_g","authDomain":"rtdb-iot-5309b.firebaseapp.com","messagingSenderId":"661199907590"})), provideFirestore(() => getFirestore()), provideDatabase(() => getDatabase())],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
