#include<iostream>
using namespace std;
int main(){
    int a[]={4,8,2,6,9,10};
    int n=6;
    int x=6;
    int y=10;

    for(int i=0;i<n;i++){
        if(x < a[i] && a[i] < y){
            cout<<a[i]<<" ";
        }
    }
    return 0;
}