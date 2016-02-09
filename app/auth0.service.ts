import {Injectable} from "angular2/core";
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AuthHttp, AuthConfig, tokenNotExpired, JwtHelper} from 'angular2-jwt';

declare var Auth0Lock;

@Injectable()
export class Auth0Service {
    lock = new Auth0Lock('xxxx', 'yyyyy'); //@chenkie & @set321go i didn't use lock: Auth0Lock as my tsc tells me error so I added declare var Auth0Lock above
    jwtHelper: JwtHelper = new JwtHelper();

    login() {
        this.lock.show((err: string, profile: string, id_token: string) => {

            if (err) {
                throw new Error(err);
            }

            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', id_token);

        });
    }

    logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
    }

    loggedIn() {
        return tokenNotExpired();
    }
}