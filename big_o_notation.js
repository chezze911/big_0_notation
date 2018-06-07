//big o notation

public class BigONotation {
	
	45^3 + 20^2 + 19 = 84
			45^3 + 20n^2 + 19 = 459 (n=2)
					45n^3 + 19 = 47,019 (n=10)
							45n^3 = 45,000
							0(N^3)


}

public class BigONotation {
	
	// 0(1)
	// 0(N)
	// 0(N^2)
	// 0(log N)
	// more efficient because 
	// 0(N log N)

	private int[] theArray;
	private int arraySize;
	private int itemsInArray = 0;
	static long startTime;
	statis long endTime;

	public static void main(String[] args) {
		BigONotation testAlgo2 = new BigONotation(100000);
		testAlgo2.generateRandomArray();

		BigONotation testAlgo3 = new BigONotation(200000);
		testAlgo3.generateRandomArray();

		BigONotation testAlgo4 = new BigONotation(300000);
		testAlgo4.generateRandomArray();

		BigONotation testAlgo5 = new BigONotation(400000);
		testAlgo5.generateRandomArray();

		testAlgo2.linearSearchForValue(20);
		testAlgo3.linearSearchForValue(20);
		testAlgo4.linearSearchForValue(20);

		//Output = Value Found: true
		//Linear Search Took 4
		//Value Found: true
		//Linear Search Took 5
		//Value Found: true
		//Linear Search Took 18


		testAlgo2.bubblesort();
		testAlgo3.bubblesort();

		BigONotation testAlgo2 = new BigONotation(100000);
		testAlgo2.generateRandomArray();

		BigONotation testAlgo3 = new BigONotation(200000);
		testAlgo3.generateRandomArray();

		BigONotation testAlgo4 = new BigONotation(300000);
		testAlgo4.generateRandomArray();

		//BubbleSort Took 362
		//BubbleSort Took 1612
		//BubbleSort Took 28930
		// how dramatically slower bubblesort gets depending upon the amount of data
		// which is why order of N^2 is very bad and to be avoided




		testAlgo2.binarySearchForValue(20);
		testAlgo3.binarySearchForValue(20);

		//BubbleSort Took 162
		//BubbleSort Took 721
		//Found Match in index 96
		//Binary Search Took 0
		//Times Through 9 (went through 9 times to search 10k items)
		//Found Match in index 213
		//Binary Search Took 0
		//Times Through 10 (went through 10 times to search 20k items)
		// This is the picture of efficiency 



		startTime = System.currentTimeMillis();

		testAlgo2.quicksort(0, testAlgo2, itemsInArray);
		//cycle through 100k items in 41ms
		//Output
		// Quick Sort Took 41

		


		endTime = System.currentTimeMillis();
		System.out.println("Linear Search Took " + (endTime - startTime));


	}

							
}

// 0(1)

public void addItemToArray(int newItem){
	theArray[itemsInArray++] = newItem;

}

// 0(N)
public void linearSearchForValue(int value){

	boolean valueInArray = false;
	String indexsWithValue = "";

	startTime = System.currentTimeMillis();

	for(int i = 0; i < arraySize, i++) {
		if(theArray[i] == value){
			valueInArray = true;
			indexsWithValue += i + " ";

		}
	}
	System.out.println("Value found: " + valueInArray);
	endTime = System.currentTimeMillis();
	System.out.println("Linear Search Took " + (endTime - startTime));
}

// 0 (N^2) 0(N^2)

public void bubblesort(){

	startTime = System.currentTimeMillis()
	for(int i = arraySize - 1; i > 1; i--){

		for(int j = 0; j < i; j++){

			if(theArray[j] > theArray[j+1]){

			}
		}
	}
}

// 0(log N) log N N
//as log N increases in comparison to N, 
// log N algorithms are incredibly efficient because increasing the ammount of data has little
// to no effect in the beginning because the amt of data is halfed each time

// 0(log N)

public void binarySearchForValue(int value){

	startTime = System.currentTimeMillis();

	int lowIndex = 0;
	int highIndex = arraySize - 1;

	int timesThrough = 0;

	while(lowIndex <= highIndex){

		int middleIndex = (highIndex + lowIndex) / 2;

		if(theArray[middleIndex] > value)
			lowIndex = middleIndex +1;
		else if(theArray[middleIndex] > value)
			highIndex = middleIndex - 1;

		else{

			System.out.println("Found Match in index " + middleIndex);
			lowIndex = highIndex + 1;

		}

		timesThrough++;

	}

	endTime = System.currentTimeMillis();
	// System.out.println("Linear Search Took " + (endTime - startTime));
	// System.out.println("BubbleSort Took " + (endTime - startTime));
	System.out.println("Binary Search Took " + (endTime - startTime));

}

// 0(n log m)
0(N)
//what we want to try and avoid is bubblesort, quicksort is so efficient but why?
// it is comparing and moving values very efficiently.  values are only going to be compared once. and not over and over again.  
// 

Comparisons = log n!
Comparisons = log n + log(n-1)+......+ (log 1)
Comparisons = n log n
// simplifying log factorial

public void quickSort(int left, int right){

	if(right - left <= 0)
		return;

	else{

		int pivot = theArray[right];
		int pivotLocation = partitionArray(left, right, pivot);
		quickSort(left, pivotLocation - 1)
		quickSort(pivotLocatoin + 1, right);

	}
}

public int partitionArray(int left, int right, int pivot){

	int leftPointer = left - 1;
	int rightPointer = right;

	while(true){

		while(theArray[++leftPointer] < pivot)
			;

		while(rightPointer > 0 && theArray[--rightPointer] > pivot)
			;

		if(leftPointer, rightPointer){
			break;
		} else {
			swapValues(leftPointer, rightPointer);

		}
	}

	swapValues(leftPointer, right);
	return leftPointer;
}

BigONotation(int size) {

	arraySize = size;
	theArray = new int[size];

}

public void generateRandomArray() {
	for (int i = 0; i < arraySize; i++) {

		theArray[i] = (int) (Math.random() * 1000) + 10
	}
}