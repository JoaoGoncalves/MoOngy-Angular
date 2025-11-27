import { InjectionToken } from "@angular/core"


export interface AppConstants {
    apiUrl: string;
}

export const CONSTANTS = new InjectionToken<AppConstants>('CONSTANTS')



/* const CONSTANTS = {
    apiUrl: 'https://my-json-server.typicode.com/JoaoGoncalves/hrms-api'
}

export const Constants = new InjectionToken('Constants', {
    factory(){
        return CONSTANTS;
    },
    providedIn: 'root'
}) */