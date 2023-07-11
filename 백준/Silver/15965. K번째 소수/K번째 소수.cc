#include <iostream>
#include <vector>
using namespace std;

const int MAX = 500000;

int main()
{
  int K;
  cin >> K;
  vector<int> isPrime(MAX, true);
  vector<int> primes;

  isPrime[0] = isPrime[1] = false;

  for (int i = 2; i < MAX; i++)
    if (isPrime[i])
    {
      primes.push_back(i);
      for (int j = i * 2; j < MAX; j += i)
        isPrime[j] = false;
    }

  cout << primes[K - 1] << endl;

  return 0;
}