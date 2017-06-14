/// <reference path='fourslash.ts'/>

////interface I { x: number; y: number; }
////
////declare function f<T>(x: T): void;
////f<I>({ /*f*/ });
////
////declare function g<T>(x: keyof T): void;
////g<I>("/*g*/");

goTo.marker("f");
verify.completionListCount(2);
verify.completionListContains("x");
verify.completionListContains("y");

goTo.marker("g");
verify.completionListContains("x");
verify.completionListContains("y");
verify.completionListCount(2);
