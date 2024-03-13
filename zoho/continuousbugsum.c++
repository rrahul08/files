#include<iostream>
using namespace std;
int main(){
    int a[]={0,5,6,0,9,0,1,4};
    int n=8;
    int big=0;
    int sum=0;
    for(int i=0;i<n-1;i++){
        sum=a[i]+a[i+1];
        if((sum)>big){
            big=sum;
            
        }
        
    
    }
    cout<<big;
    return 0;
    
}