

class BinarySearch {

    constructor(arr, element) {

        this.array = arr;
        this.element = element;

    }


    findRange() {


        //SIze of the range


        let startIndex = 0;
        let endIndex = 1;
        console.log("target",this.element);
        while (this.element > this.array[endIndex]) {
            let newstartIndex = endIndex + 1;
            // console.log("newstartIndex",newstartIndex);
            endIndex = endIndex + (endIndex - startIndex + 1)*2;
            startIndex = newstartIndex;
            console.log("startIndex",startIndex);
            console.log("endIndex",endIndex);

        }

        console.log("The range is between",startIndex,endIndex);

        return this.binarySearch(startIndex,endIndex)

    }

    binarySearch(startIndex,endIndex) {


        // let startIndex = 0;
        // let endIndex = this.array.length - 1;
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
const el = 6;
const newObj = new BinarySearch(arr, el)

console.log("target found at ", newObj.findRange())