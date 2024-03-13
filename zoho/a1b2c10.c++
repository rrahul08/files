/* 1. Write a program to give the following output for the given input

Eg 1: Input: a1b10
       Output: abbbbbbbbbb
Eg: 2: Input: b3c6d15
          Output: bbbccccccddddddddddddddd
The number varies from 1 to 99.*/
#include <iostream>
#include<cstring>
using namespace std;
// a2b3c10
int main() {
    string s,temp;
    cin>>s;
    int num=0;
    for(int i=0;i<s.size();i++){
        if(s[i]>='0' && s[i]<='9'){
             temp=s[i-1];
            while(s[i]>='0' && s[i]<='9'){
                num=(num*10)+(s[i]-48);
                i++;
            }
            for(int j=0;j<num;j++){
                cout<<temp;
            }
            
        }
        num=0;
    }
    
    // Write C++ code here
    

    return 0;
}