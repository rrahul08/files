#include<iostream>
using namespace std;
int main(){
    int a[]={1,2,3,4,5,6,7};
    int n=7;

    for(int i=1;i<n;i=i+2){
        int temp=a[i];
        a[i]=a[i+1];
        a[i+1]=temp;
    }

    for(int i=0;i<n;i++){
        cout<<a[i]<<" ";

    }
    return 0;
}