import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { LDAP_USERS } from 'src/app/models/ldap-mock-data';
import { UserLdap } from 'src/app/models/user-ldap';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users: UserLdap[] = LDAP_USERS;

  getUsers(): Observable<UserLdap[]> {
    return of(this.users)
  }

  getUser(login: string): Observable<UserLdap> {
    const user = this.users.find((user: UserLdap) => user.login === login);

    if (user !== undefined) {
      return of(user);
    }

    return throwError(() => new Error('Utilisateur non trouvé'));
  }

  constructor() { }

}
