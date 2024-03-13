#include<iostream>
#include<algorithm>
using namespace std;
int valid(string s){
    
    int left=0,right=0;
    int maxlen=0;

    for(int i=0;i<s.length();i++){
        if(s[i]=='('){
            left++;
        }else if(s[i]==')'){
            right++;
        }
        if (left == right) {
                maxlen = max(maxlen, left * 2);
            } else if (right > left) {
                left = 0;
                right = 0;
            }
    }

    left=0;
    right=0;

    for(int i=s.length()-1;i>=0;i--){
        if(s[i]=='('){
            left++;
        }else if(s[i]==')'){
            right++;
        }
        if (left == right) {
                maxlen = max(maxlen, left * 2);
            } else if (left > right) {
                left = 0;
                right = 0;
            }
        }
        return maxlen;
    }

int main(){
    string s;
    cin>>s;
    cout<<valid(s);

}
