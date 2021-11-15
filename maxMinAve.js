function findAvg(arr){
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for(var i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min = arr[i];
        }
        sum = sum + arr[i]
    }

    var average = sum/arr.length;
    return "The minimum is "+ min + ", the maximum is " + ", and the average is " + average + ".";
}

