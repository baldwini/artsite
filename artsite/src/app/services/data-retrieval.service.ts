import { compileNgModule } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Piece } from '../piece.model';

@Injectable({
  providedIn: 'root'
})
export class DataRetrievalService {
  pieces: Observable<Piece[]>;

  constructor(private afs: AngularFirestore) {
    this.pieces = this.afs.collection('pieces').valueChanges() as Observable<Piece[]>;
  }

  getArtwork(){
    return this.pieces;
  }
}
