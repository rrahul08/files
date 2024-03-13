#include<iostream>
using namespace std;

int subsetsum(int a[],int n,int sum){
     

       for(int i=0;i<n;i++){
        for(int j=i+1;j<n;j++){
            if((a[i]+a[j])==sum){
                return true;
            }
        }
       }
    return false;
}


int main(){
    int a[]={3,34,4,12,5,2};
    int n=6;
    int targetsum=14;
    if (subsetsum(a, n, targetsum)) {
        cout << "Subset with sum " << targetsum << " exists." << endl;
    } else {
        cout << "No subset with sum " << targetsum << " exists." << endl;
    }
    
}