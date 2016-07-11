
import React, {
    Component
} from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class TimerComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: this.props.start,
        };
    }

    componentWillMount(){

    }

    componentDidMount(){
        this._timeMinus();
    }

    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this._timerClear();
    }

    _timerClear(){
        this.timer && clearTimeout(this.timer);
    }

    _timeMinus(){
        var step = this.props.step || 1;
        var time = this.state.time || 0;
        var end = this.props.end || 0;

        if(time == 0 || time <= end){
            this.props.onTimerEnd && this.props.onTimerEnd();
            this._timerClear();
        }else{
            this.setState({
                time: time - step,
            }, ()=>{
                this.timer = setTimeout(() => {
                    this._timeMinus();
                }, step * 1000);
            });
        }
    }

    _getText(){

        var time = this.state.time;
        if(!this.props.word){
            return time;
        }
        return this.props.word.replace("{t}", time);
    }

    render() {
        var txt = this._getText();
        return (<View>
            <Text>{txt}</Text>
        </View>);
    }
}

const styles = StyleSheet.create({

});

