import React, {useEffect, useState} from 'react'
import {interval, Subject} from 'rxjs'
import s from './App.module.css'
import {takeUntil} from 'rxjs/operators'

function App() {

    // Использование React Hooks для изменение локального State
    const [time, setTime] = useState(0)
    const [state, setState] = useState('STOP')

    //
    useEffect(() => {
        const unsubscribe$ = new Subject()
        interval(1000)
            .pipe(takeUntil(unsubscribe$))
            .subscribe(() => {
                if (state === 'START') {
                    setTime(val => val + 1000)
                }
            })
        return () => {
            unsubscribe$.next();
            unsubscribe$.complete();
        };
    }, [state])

    // Создание таймера 00:00:00
    const timer = new Date(time).toISOString().slice(11, 19)

    return (
        <div className={s.container}>
            <h1>STOPWATCH</h1>
            <div className={s.blockTimer}><h1>{timer}</h1></div>
            <div className={s.buttonBlock}>
                <button
                    className={s.btn}
                    onClick={() => setState('START')}
                >START
                </button>
                <button
                    className={s.btn}
                    onClick={() => {
                        setTime(0)
                        setState('STOP')
                    }}
                >STOP
                </button>
                <button
                    className={s.btn}
                    onClick={() => setState('PAUSE')}
                >PAUSE
                </button>
                <button
                    className={s.btn}
                    onClick={() => {
                        setTime(0)
                        setState('RESET')
                    }}
                >RESET
                </button>
            </div>
        </div>
    )
}

export default App