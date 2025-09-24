import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public listSelectedItem: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
}
