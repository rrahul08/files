#include<iostream>
using namespace std;
int main(){
    int a[]={8,3,10,19};
    int n=4;
   


    for(int i=0;i<n;i++){
        int big = INT_MAX;
        for(int j=0;j<n;j++){
            if(a[i]<a[j]){
                if(big>a[j]){
               big=a[j];}
            }
        }
        if(big!=INT_MAX){
            cout<<a[i]<<"->"<<big<<", ";
        }else{
            cout<<a[i];
        }
        
    }
    return 0;
}