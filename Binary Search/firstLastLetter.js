

class BinarySearch {

    constructor(arr, element) {

        this.array = arr;
        this.element = element;

    }


    findValues(){
        let ans = [-1,-1]

        const first = this.binarySearch(this.array,this.element,true)
        const last = this.binarySearch(this.array,this.element,false);

        ans = [first,last];
        return ans;
    }

    binarySearch(arr, el,isStartValue) {

        let ans;
        let startIndex = 0;
        let endIndex = this.array.length - 1;
        const target = this.element;
        const array = this.array;

        while (startIndex <= endIndex) {

            let middle = Math.round(startIndex + (endIndex - startIndex) / 2);
            // console.log("middle", middle);

            if (target < array[middle]) {
                endIndex = middle - 1;
            }
            else if (target > array[middle]) {
                startIndex = middle + 1;
            }

            else {
                //potential answer
                // return middle
                ans = middle;
                if(isStartValue){
                    endIndex = middle-1;
                }
                else{
                    startIndex= middle+1;
                }


            }

        }

        return ans;



    }
}

const arr = [1, 2, 3, 4, 5, 5, 6, 7]
const el = 5;
const newObj = new BinarySearch(arr, el)

console.log("target found at ", newObj.findValues())