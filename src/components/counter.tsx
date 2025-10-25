"use client"; 
import { useState, ChangeEvent } from "react"; 

type CounterProps = { initialCount?: number; initialStep?: number }; 

export default function Counter({ initialCount = 0, initialStep =1}: CounterProps) {
    const clamp = (n: number) => (Number.isFinite(n) && n>=1 ? Math.floor(n) : 1);

    const [count,setCount] = useState<number>(initialCount);
    const [step,setStep] = useState<number>(clamp(initialStep));  

    const canDec = count - step >= 0; 
    
    const inc = () => setCount(c => c + step);
    const dec = () => {if (canDec) setCount(c => c - step)};
    const reset = () => setCount(0); 
    const onStep = (e: ChangeEvent<HTMLInputElement>) => {setStep(clamp(Number(e.target.value)))
    
    return( 
        <section> 
        {/* aria-live so SRs announces changes */}
        <p aria-live="polite">Count: {count}</p> 

        <div> 
            <button onClick={inc}>+{step}</button>
            <button onClick={dec} disabled={!canDec} aria-disabled={!canDec}>-{step}</button>
            <button onClick={reset}>Reset</button>
        </div>
        

    

    
