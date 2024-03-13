#include<iostream>
using namespace std;
int main(){
    int a[]={4,2,7};
    int b[]={5,6,3};
    int n=3;
    int counta,countb=0;

    for(int i=0;i<n;i++){
        
        
            if(a[i]>b[i]){
                counta++;
             }

             if(a[i]<b[i]){
                countb++;
             }

             
    

    

}
cout<<counta<<" "<<countb;

    return 0;
}