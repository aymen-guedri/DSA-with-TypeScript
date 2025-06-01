// Given two crystal balls that will break if dropped from high enough distance
// determine the exact spot in which it will break in the most optimazied way

export default function two_crystal_balls(breaks: boolean[]): number{
    const jampAmout =Math.floor(Math.sqrt(breaks.length));
    let i = jampAmout

    for (; i<breaks.length; i+=jampAmout){
        if (breaks[i]){
            break;
        }
    }
    i-= jampAmout;
    for(let j= 0; i<jampAmout && i<breaks.length; ++j, ++i){
        if (breaks[i]) {
            return i;
        }
    }
    return -1;

}