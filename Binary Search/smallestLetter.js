

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
            }

            else {
                startIndex = middle + 1;
            }

        }

        return array[startIndex % array.length]



    }
}

const arr = ['c', 'd', 'f', 'j'];
const el = 'e';
const newObj = new BinarySearch(arr, el)

console.log("target found at ", newObj.binarySearch())