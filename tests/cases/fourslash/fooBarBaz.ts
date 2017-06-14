/// <reference path='fourslash.ts'/>

////interface I { x: number; }
////declare function f<T>(x: T, y: number): void;
////f<I>({ /**/

goTo.marker();
verify.currentSignatureHelpIs("f(x: I, y: number): void");
