#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>

using namespace std;

vector<bool> sieve(int n)
{
  vector<bool> primes(n + 1, true);
  primes[0] = primes[1] = false;

  for (int i = 2; i * i <= n; ++i)
    if (primes[i])
      for (int j = i * i; j <= n; j += i)
        primes[j] = false;

  return primes;
}

int main()
{
  int A, B, D;
  cin >> A >> B >> D;

  vector<bool> isPrime = sieve(B);
  int cnt = 0;

  for (int i = A; i <= B; ++i)
    if (isPrime[i])
    {
      string s = to_string(i);
      if (count(s.begin(), s.end(), '0' + D) > 0)
        cnt++;
    }

  cout << cnt << endl;

  return 0;
}
