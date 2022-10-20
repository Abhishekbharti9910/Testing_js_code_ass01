const rev = (str) => {
    let arr = str.split("");
    // let tempArr = new Array();
    // let i = 0;
    // let j = arr.length;
    // while (i <= j) {
    //     let temp = arr[i];
    //     tempArr[i] = arr[j];
    //     tempArr[j] = temp;
    //     i++;
    //     j--;
    // }
    let revArr = arr.reverse();

    return revArr.join(""); //converting back to string
}

export default rev;