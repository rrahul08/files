#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <queue>
using namespace std;

class Passenger {
public:
    static int id;
    string name;
    int age;
    string berthPreference;
    int passengerId;
    string alloted;
    int number;

    Passenger(string name, int age, string berthPreference) {
        this->name = name;
        this->age = age;
        this->berthPreference = berthPreference;
        this->passengerId = id++;
        alloted = "";
        number = -1;
    }
};

int Passenger::id = 1;

class TicketBooker {
public:
    static int availableLowerBerths;
    static int availableMiddleBerths;
    static int availableUpperBerths;
    static int availableRacTickets;
    static int availableWaitingList;

    static queue<int> waitingList;
    static queue<int> racList;
    static vector<int> bookedTicketList;

    static vector<int> lowerBerthsPositions;
    static vector<int> middleBerthsPositions;
    static vector<int> upperBerthsPositions;
    static vector<int> racPositions;
    static vector<int> waitingListPositions;

    static map<int, Passenger> passengers;

    void bookTicket(Passenger &p, int berthInfo, string allotedBerth) {
        p.number = berthInfo;
        p.alloted = allotedBerth;
        passengers[p.passengerId] = p;
        bookedTicketList.push_back(p.passengerId);
        cout << "-------------------------- Booked Successfully" << endl;
    }

    // Rest of the TicketBooker class implementation here
    // ...

    void printAvailable() {
        cout << "Available Lower Berths " << availableLowerBerths << endl;
        cout << "Available Middle Berths " << availableMiddleBerths << endl;
        cout << "Available Upper Berths " << availableUpperBerths << endl;
        cout << "Available RACs " << availableRacTickets << endl;
        cout << "Available Waiting List " << availableWaitingList << endl;
        cout << "--------------------------" << endl;
    }

    void printPassengers() {
        if (passengers.size() == 0) {
            cout << "No details of passengers" << endl;
            return;
        }
        for (const auto &entry : passengers) {
            Passenger p = entry.second;
            cout << "PASSENGER ID " << p.passengerId << endl;
            cout << " Name " << p.name << endl;
            cout << " Age " << p.age << endl;
            cout << " Status " << p.number << p.alloted << endl;
            cout << "--------------------------" << endl;
        }
    }
};

int TicketBooker::availableLowerBerths = 1;
int TicketBooker::availableMiddleBerths = 1;
int TicketBooker::availableUpperBerths = 1;
int TicketBooker::availableRacTickets = 1;
int TicketBooker::availableWaitingList = 1;

queue<int> TicketBooker::waitingList;
queue<int> TicketBooker::racList;
vector<int> TicketBooker::bookedTicketList;

vector<int> TicketBooker::lowerBerthsPositions = {1};
vector<int> TicketBooker::middleBerthsPositions = {1};
vector<int> TicketBooker::upperBerthsPositions = {1};
vector<int> TicketBooker::racPositions = {1};
vector<int> TicketBooker::waitingListPositions = {1};

map<int, Passenger> TicketBooker::passengers;

void bookTicket(Passenger &p) {
    TicketBooker booker;
    if (TicketBooker::availableWaitingList == 0) {
        cout << "No Tickets Available" << endl;
        return;
    }

    // Rest of the bookTicket logic here
    // ...

}

void cancelTicket(int id) {
    TicketBooker booker;
    if (!booker.passengers.count(id)) {
        cout << "Passenger detail Unknown" << endl;
    } else {
        booker.cancelTicket(id);
    }
}

int main() {
    bool loop = true;
    while (loop) {
        cout << " 1. Book Ticket \n 2. Cancel Ticket \n 3. Available Tickets \n 4. Booked Tickets \n 5. Exit" << endl;
        int choice;
        cin >> choice;

        switch (choice) {
            case 1: {
                cout << "Enter Passenger name, age, and berth preference (L, M, or U)" << endl;
                string name;
                int age;
                string berthPreference;
                cin >> name >> age >> berthPreference;
                Passenger p(name, age, berthPreference);
                bookTicket(p);
            } break;

            case 2: {
                cout << "Enter passenger Id to cancel" << endl;
                int id;
                cin >> id;
                cancelTicket(id);
            } break;

            case 3: {
                TicketBooker booker;
                booker.printAvailable();
            } break;

            case 4: {
                TicketBooker booker;
                booker.printPassengers();
            } break;

            case 5: {
                loop = false;
            } break;

            default:
                break;
        }
    }

    return 0;
}
