import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { DataRetrievalService } from '../services/data-retrieval.service';
import { Piece } from '../piece.model';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  pieces!: Piece[];

  constructor(public data: DataRetrievalService) { }

  ngOnInit(): void {
    this.data.getArtwork().subscribe(pieces => {
      this.pieces = pieces;
      console.log(pieces);
    });
  }

  ngOnDestroy(): void{
    
  }
}
