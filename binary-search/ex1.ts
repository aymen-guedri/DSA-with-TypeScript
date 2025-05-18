export default function binary_search(haystack:number[], needle:number):boolean{
    let low = 0
    let hight = haystack.length;
    do {
        const m = Math.floor(low+(hight-low)/2)
        const v = haystack[m];
        if(v===needle){
            return true;
        }else if(v >needle){
            hight =m;
        }else{
            low = m+1
        }

    } while (low<hight);
    return false;

}