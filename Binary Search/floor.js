

class BinarySearch {

    constructor(arr, element) {

        this.array = arr;
        this.element = element;

    }


    binarySearch() {


        let startIndex = 0;
        let endIndex = this.array.length - 1;
        const target = this.element;
        const array = this.array;


        while (startIndex <= endIndex) {

            let middle = Math.round(startIndex + (endIndex - startIndex) / 2);
            // console.log("middle", middle);

            if (target < array[middle]) {
                endIndex = middle - 1;
                console.log("endIndex", endIndex);

            }
            else if (target > array[middle]) {
                startIndex = middle + 1;
                console.log("startIndex", startIndex);

            }

            else {
                return middle
            }

        }

        return array[endIndex]



    }
}

const arr = [2, 3, 5, 9, 14, 16, 18];
const el = 13;
const newObj = new BinarySearch(arr, el)

console.log("target found at ", newObj.binarySearch())