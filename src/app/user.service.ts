import {Subject} from 'rxjs';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class UserService {
  activatedEmitter = new Subject<boolean>();
}
