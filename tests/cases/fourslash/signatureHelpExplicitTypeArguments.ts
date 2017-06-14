/// <reference path='fourslash.ts'/>

////declare function f<T>(x: T): T;
////f<number>(/**/

goTo.marker();
verify.currentSignatureHelpIs("f(x: number): T");
