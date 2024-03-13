#include<iostream>
using namespace std;
int main(){
    string s1="anagram";
    string s2="nagaram";

    int count1[26] = {0};
    int count2[26] = {0};

    for(int i=0;i<s1.length();i++){
        count1[s1[i]-'a']++;
    }

    for(int i=0;i<s2.length();i++){
        count2[s2[i]-'a']++;
    }

    for (int i = 0; i < 26; i++) {
        if (count1[i] != count2[i]) {
            cout<<"false";
        }
    }

    cout<<"true";
    }
    
