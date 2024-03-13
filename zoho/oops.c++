#include<iostream>
using namespace std;

class AbstractEmployee{
    virtual void Askforpromotion()=0;
};

class Employee:AbstractEmployee{
    private:
       
       string Company;
       int Age;

    protected:
       string Name;

    public:
    void setname(string name){
        Name=name;
    }
    string getname(){
        return Name;
    }

    void setcompany(string company){
        Company = company;
    }

    string getcompany(){
        return Company;
    }

    void setage(int age){
        Age=age;
    }
    
    int getage(){
        return Age;
    }

    Employee(string name,string company,int age){
        Name=name;
        Company=company;
        Age=age;
    }
     void introduce(){
        cout<<Name<<endl;
        cout<<Company<<endl;
        cout<<Age<<endl;
     }

     void Askforpromotion(){
        if(Age>30){
            cout<<Name<<" is promoted"<<endl;
        }else{
            cout<<Name<<" not promoted"<<endl;
        }
     }

     virtual void work(){
        cout<<Name<<" work is checking email"<<endl;
     }
};

class Developer: public Employee{
    public:
    string Favproglang;
    Developer(string name,string company,int age,string favproglang):Employee(name,company,age){
        Favproglang=favproglang;
    }

    void fixedbug(){
        cout<<Name<<" fixed bug in "<<Favproglang<<endl;
    }

    void work(){
        cout<<Name<<" work is to fix bugs"<<endl;
    }
};

class Teacher : public Employee{
    public:
    string Subject;

    Teacher(string name,string company,int age,string subject):Employee(name,company,age){
        Subject=subject;
    }

    void preparelesson(){
        cout<<Name<<" prepares lesson in "<<Subject<<endl;
    }
    void work(){
        cout<<Name <<" work is to teach"<<endl;
    }
 
};

int main(){
   Developer d=Developer("Rahul","Google",22,"Javascript");
   d.fixedbug();
   Teacher t=Teacher("Rahul","Govt",40,"DSA");
   t.preparelesson();
   t.work();
   Employee *e1=&d;
   Employee *e2=&t;

   e1->work();
   e2->work();

}