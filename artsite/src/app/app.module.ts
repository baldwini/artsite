import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBiR76nGZ4Jg0XKqytCYaICxU0iTlYbrsE",
  authDomain: "artsite-f25da.firebaseapp.com",
  projectId: "artsite-f25da",
  storageBucket: "artsite-f25da.appspot.com",
  messagingSenderId: "1018173930428",
  appId: "1:1018173930428:web:ce7e671f529b1f5dd849b9",
  measurementId: "G-9DC1ZJGXWJ"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GalleryComponent,
    GalleryCardComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
