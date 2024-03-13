// 3. Write a program to print the following output for the given input. You can assume the string is of odd length

// Eg 1: Input: 12345
//        Output:
// 1       5
//   2   4
//     3
//   2  4
// 1      5
// Eg 2: Input: geeksforgeeks
//          Output:
// g                         s
//   e                     k
//     e                 e
//       k             e
//         s         g
//           f      r
//              o
//           f     r
//         s         g
//       k             e
//     e                 e
//   e                      k
// g                          s 
#include<iostream>
#include<cstring>
using namespace std;
int main(){
    string s;
    cin>>s;
    int n=s.length();

    for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
            if(i==j || i+j==n-1){
                cout<<s[i];
            }else{
                cout<<" ";
            }
        }
        cout<<endl;
    }

    return 0;
}