// 4. Find if a String2 is substring of String1. If it is, return the index of the first occurrence. else return -1.

// Eg 1:Input:
//         String 1: test123string
//          String 2: 123
//         Output: 4
// Eg 2: Input:
//         String 1: testing12
//         String 2: 1234 
//         Output: -1
#include<iostream>
#include<cstring>
using namespace std;
class Solution {
public:
    int strStr(string haystack, string needle) {
        for(int i=0;i<haystack.length();i++){
            if(haystack[i]==needle[0]){
                int j=0;
                int k=i;
                while(j<needle.length() && k<haystack.length() && needle[j]==haystack[k]){
                    j++;
                    k++;
                    if(j == needle.length()){
                        return i;
                    }
                }
            }

        }
        return -1;
        
    }
};