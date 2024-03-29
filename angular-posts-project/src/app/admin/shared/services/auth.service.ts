import {Injectable} from '@angular/core'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {catchError, Observable, Subject, tap, throwError} from 'rxjs'

import {FbAuthResponse, User} from '../../../shared/interfaces'
import {environment} from '../../../../environments/environment'

@Injectable()
export class AuthService {

  public error$: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient) {
  }

  get token(): string | null {
    const expDate: Date = new Date(<any>localStorage.getItem('fb-token-exp'))
    if (new Date() > expDate) {
      this.logout()
      return null
    }
    return localStorage.getItem('fb-token')
  }

  login(user: User): Observable<any> {
    user.returnSecureToken = true
    return <any>this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user).pipe(
      tap(<any>this.setToken),
      catchError(this.handleError.bind(this))
    )
  }

  logout() {
    this.setToken(null)
  }

  isAuthenticated(): boolean {
    return !!this.token
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error

    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('Incorrect email')
        break
      case 'INVALID_PASSWORD':
        this.error$.next('Incorrect password')
        break
      case 'EMAIL_NOT_FOUND':
        this.error$.next('This email does not exist')
        break
    }

    console.log(message)
    return throwError(error)
  }

  private setToken(response: FbAuthResponse | null) {
    if (response) {
      const expDate: Date = new Date(new Date().getTime() + +response.expiresIn * 1000)
      localStorage.setItem('fb-token', response.idToken)
      localStorage.setItem('fb-token-exp', expDate.toString())
    } else {
      localStorage.clear()
    }
  }

}
