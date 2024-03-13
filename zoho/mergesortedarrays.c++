// 5. Given two sorted arrays, merge them such that the elements are not repeated

// Eg 1: Input:
//         Array 1: 2,4,5,6,7,9,10,13
//         Array 2: 2,3,4,5,6,7,8,9,11,15
//        Output:
//        Merged array: 2,3,4,5,6,7,8,9,10,11,13,15 
#include<iostream>
using namespace std;
void mergedarrays(int a1[],int a2[],int n1,int n2,int m[],int &c){
    int i,j=0;
    while(i<n1 && j<n2){
        if(a1[i]<a2[j]){
           m[c++]=a1[i++];
        }else if(a1[i]>a2[j]){
            m[c++]=a2[j++];
        }
        else{
            m[c++]=a1[i++];
            j++;
        }
    }

    while(i<n1){
         m[c++]=a1[i++];
    }

    while(j<n2){
        m[c++]=a2[j++];
    }
}
int main(){
    int a1[]={2,4,5,6,7,9,10,13};
    int n1 = sizeof(a1) / sizeof(a1[0]);
    int a2[]={2,3,4,5,6,7,8,9,11,15};
    int n2 = sizeof(a2) / sizeof(a2[0]);
    int c=0;
    

   
    int *m=new int[n1+n2];

    mergedarrays( a1, a2, n1, n2, m,c);


    for(int i=0;i<c;i++){
        cout<<m[i]<<" ";
    }

    delete[] m;
    return 0;
}