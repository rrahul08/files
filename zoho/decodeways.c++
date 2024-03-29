// C++ implementation to count number of
// decodings that can be formed from a
// given digit sequence
#include <cstring>
#include <iostream>
using namespace std;

// recurring function to find
// ways in how many ways a
// string can be decoded of length
// greater than 0 and starting with
// digit 1 and greater.
int countDecoding(char* digits, int n)
{
	// base cases
	if (n == 0 || n == 1)
		return 1;
	if (digits[0] == '0')
		return 0;

	// for base condition "01123" should return 0
	// Initialize count
	int count = 0;

	// If the last digit is not 0,
	// then last digit must add
	// to the number of words
	if (digits[n - 1] > '0')
		count = countDecoding(digits, n - 1);

	// If the last two digits form a number smaller
	// than or equal to 26, then consider
	// last two digits and recur
	if (digits[n - 2] == '1'
		|| (digits[n - 2] == '2'
		&& digits[n - 1] < '7'))
		count += countDecoding(digits, n - 2);

	return count;
}

// Given a digit sequence of length n,
// returns count of possible decodings by
// replacing 1 with A, 2 with B, ... 26 with Z
int countWays(char* digits, int n)
{
	if (n == 0 || (n == 1 && digits[0] == '0'))
		return 0;
	return countDecoding(digits, n);
}

// Driver code
int main()
{
	char digits[] = "1234";
	int n = strlen(digits);
	cout << "Count is " << countWays(digits, n);
	return 0;
}
// Modified by Atanu Sen
