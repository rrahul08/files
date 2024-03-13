#include<iostream>
using namespace std;

int main(){

    for(int i=1;i<=100;i++){
        if(i%3 == 0 && i%5 ==0){
            cout<<"Fizzbuzz";
        }elseif(i%3 == 0){
            cout<<"Fizz";
        }elseif(i%5==0){
            cout<<"Buzz";
        }
    }

    return 0;
}