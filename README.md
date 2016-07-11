# React-Native-Timer
a simple Timer for React Native

## Use


    import TimerComponent from '../components/Timer';

    <TimerComponent start={13} end={0} step={1} word={"时间还剩下{t}秒，请注意！"} onTimerEnd={()=>{console.log('结束了')}} />
