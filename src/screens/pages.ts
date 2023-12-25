import {Splash} from "./index"
import { Home,  } from "./stack";

enum NAMES {
    SPLASH = 'SPLASH',
    HOME = 'HOME',

}

export const PAGES : {
    [name in NAMES]:{
        name: string;
        component:any;
        options?:any;
    };
}={
    [NAMES.SPLASH]:{
        name:'Splash',
        component: Splash
    },  
    [NAMES.HOME]:{
        name:'Home',
        component: Home
    },
  

}