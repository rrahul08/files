/* 2. Write a program to sort the elements in odd positions in descending order and elements in ascending order

Eg 1: Input : 13,2 4,15,12,10,5
      Output: 13,2,12,10,5,15,4
Eg 2: Input : 1,2,3,4,5,6,7,8,9
      Output: 9,2,7,4,5,6,3,8,1 
*/

#include <iostream>

void customSort(int arr[], int size) {
    for (int i = 0; i < size; i += 2) {
        for (int j = i + 2; j < size; j += 2) {
            if (arr[i] < arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    for (int i = 1; i < size; i += 2) {
        for (int j = i + 2; j < size; j += 2) {
            if (arr[i] > arr[j]) {
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

int main() {
    int input[] = {1,2,3,4,5,6,7,8,9};
    int size = sizeof(input) / sizeof(input[0]);

    customSort(input, size);

    for (int i = 0; i < size; i++) {
        std::cout << input[i] << " ";
    }

    return 0;
}


