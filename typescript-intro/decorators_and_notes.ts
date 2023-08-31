// what is a decorator
// it can modify how a class or function operates
// It is used in Angular, there are several different ones in angular
// begins with "@"  ex.  @Component({})

// decorators will need to be enabled in the tsconfig.json file


// in tsconfig.json   under the outdir property
// you can change where the compiled .js files are written so that your TS folder doesn't get cluttered


// sourcemap property
// in tsconfig.json you can the sourcemap property true
// this creates a file that will point the debugger to the source .ts file


// noemit property
// when set to true, will not generate complied .js file for your .ts code

// TS will not stop your code from compiling to JS
// it will give you a warning, but still, it will compile