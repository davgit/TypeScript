/// <reference path='fourslash.ts'/>

////declare function f<T = number>(x: T): void;
////f(/**/

goTo.marker();
verify.currentSignatureHelpIs("f<T = number>(x: T): void");
