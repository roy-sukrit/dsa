

class BinarySearch {

    constructor(arr, element) {

        this.array = arr;
        this.element = element;

    }


    binarySearch() {


        let startIndex = 0; 
        let endIndex = this.array.length-1;
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
                return middle
            }

       }

       return "Target Not Found"



    }
}

const arr = [1, 2, 3, 4, 5, 6, 7]
const el = 1;
const newObj = new BinarySearch(arr, el)

console.log("target found at ", newObj.binarySearch())