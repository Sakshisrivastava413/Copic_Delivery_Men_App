import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirebaseAuth } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(
    private firestore: AngularFirestore,
    private afAuth: FirebaseAuth
  ) { }

  signup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password).then(res => {
      if (res.user) {
        this.firestore.collection('courierMen').doc(email).set({

        })
      }
    });
  }

}
