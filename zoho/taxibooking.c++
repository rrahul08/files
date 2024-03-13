#include <iostream>

class Taxi {
private:
    int taxiNumber;
    int totalEarnings;
    int currentLocation;
    int nextAvailableTime;

public:
    Taxi(int number) : taxiNumber(number), totalEarnings(0), currentLocation(0), nextAvailableTime(0) {}

    bool isFree(int time) {
        return time >= nextAvailableTime;
    }

    void allocateTaxi(int customerID, char pickupPoint, char dropPoint, int pickupTime) {
        int distance = abs(dropPoint - pickupPoint) * 15;
        int amount = 100 + (distance - 5) * 10;
        totalEarnings += amount;

        nextAvailableTime = pickupTime + (distance / 15);
        currentLocation = dropPoint;

        std::cout << "Taxi-" << taxiNumber << " is allotted\n";
        std::cout << "BookingID\tCustomerID\tFrom\tTo\tPickupTime\tDropTime\tAmount\n";
        std::cout << taxiNumber << "\t" << customerID << "\t\t" << (char)pickupPoint << "\t" << (char)dropPoint
                  << "\t" << pickupTime << "\t\t" << nextAvailableTime << "\t\t" << amount << std::endl;
    }

    int getEarnings() {
        return totalEarnings;
    }
};

int main() {
    Taxi taxis[4] = {1, 2, 3, 4};
    char points[6] = {'A', 'B', 'C', 'D', 'E', 'F'};
    
    char pickupPoint;
    char dropPoint;
    int pickupTime;

    std::cout << "Input 1:\n";
    std::cout << "Customer ID: 1\n";
    std::cout << "Pickup Point: A\n";
    std::cout << "Drop Point: B\n";
    std::cout << "Pickup Time: 9\n\n";

    pickupPoint = 'A';
    dropPoint = 'B';
    pickupTime = 9;
    for (int i = 0; i < 4; ++i) {
        if (taxis[i].isFree(pickupTime)) {
            taxis[i].allocateTaxi(1, pickupPoint, dropPoint, pickupTime);
            break;
        }
    }

    std::cout << "\nInput 2:\n";
    std::cout << "Customer ID: 2\n";
    std::cout << "Pickup Point: B\n";
    std::cout << "Drop Point: D\n";
    std::cout << "Pickup Time: 9\n\n";

    pickupPoint = 'B';
    dropPoint = 'D';
    pickupTime = 9;
    for (int i = 0; i < 4; ++i) {
        if (taxis[i].isFree(pickupTime)) {
            taxis[i].allocateTaxi(2, pickupPoint, dropPoint, pickupTime);
            break;
        }
    }

    std::cout << "\nInput 3:\n";
    std::cout << "Customer ID: 3\n";
    std::cout << "Pickup Point: B\n";
    std::cout << "Drop Point: C\n";
    std::cout << "Pickup Time: 12\n\n";

    pickupPoint = 'B';
    dropPoint = 'C';
    pickupTime = 12;
    for (int i = 0; i < 4; ++i) {
        if (taxis[i].isFree(pickupTime)) {
            taxis[i].allocateTaxi(3, pickupPoint, dropPoint, pickupTime);
            break;
        }
    }

    std::cout << "\nTaxi details:\n";
    for (int i = 0; i < 4; ++i) {
        std::cout << "Taxi-" << i + 1 << "\tTotal Earnings: Rs. " << taxis[i].getEarnings() << std::endl;
    }

    return 0;
}
