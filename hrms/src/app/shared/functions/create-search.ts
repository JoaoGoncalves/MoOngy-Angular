import { DestroyRef, inject } from "@angular/core";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { FormControl } from "@angular/forms";
import { debounceTime, Subject, takeUntil } from "rxjs";

export function createSearch<T>(control: FormControl<T>){
    const destroyRef = inject(DestroyRef); // faz referencia ao injector da componete onde utilizar a fincao

    const destroy$ = new Subject<void>();
    destroyRef.onDestroy( ()=> destroy$.next());

    return control.valueChanges.pipe(
        debounceTime(500),
        takeUntil(destroy$)
    )
}