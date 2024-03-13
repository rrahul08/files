#include<iostream>
using namespace std;

int gap(int a[], int gap,int out) {
    int n = 13;
    
    if(out<=n){
    for(int i=0;i<out;i++){
        int sum = 0;
    for(int j = i; j < n; j += gap) {
        
        sum += a[j];
        
    }
     cout<<sum<<" ";
    }
    }else{
        cout<<"Enter value within array size";
    }
    
}

int main() {
    int a[] = {1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,12,13};
    int n = 13;

    gap(a,3,3);
    return 0;
}
