#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

unsigned long long get_pow(unsigned long long base, unsigned long long exp, unsigned long long mod)
{
  unsigned long long res = 1;
  while (exp > 0)
  {
    if (exp % 2 == 1)
      res = (res * base) % mod;

    base = (base * base) % mod;
    exp /= 2;
  }

  return res;
}

bool miller_rabin(unsigned long long n, unsigned long long a)
{
  unsigned long long d = n - 1;
  unsigned long long r = 0;
  while (d % 2 == 0)
  {
    d /= 2;
    r++;
  }

  unsigned long long x = get_pow(a, d, n);
  if (x == 1 || x == n - 1)
    return true;

  while (r-- > 0)
  {
    x = (x * x) % n;
    if (x == n - 1)
      return true;
  }

  return false;
}

bool isPrime(unsigned long long n)
{
  if (n <= 1)
    return false;

  if (n == 2 || n == 3)
    return true;

  if (n % 2 == 0)
    return false;

  vector<unsigned long long> witnesses;
  if (n < 4759123141ULL)
  {
    witnesses = {2, 7, 61};
  }
  else if (n < 3474749660383ULL)
  {
    witnesses = {2, 3, 5, 7, 11, 13};
  }
  else if (n < 341550071728321ULL)
  {
    witnesses = {2, 3, 5, 7, 11, 13, 17};
  }
  else
  {
    witnesses = {2, 3, 5, 7, 11, 13, 17, 19, 23};
  }

  for (unsigned long long a : witnesses)
  {
    if (a >= n)
      break;
    if (!miller_rabin(n, a))
      return false;
  }

  return true;
}

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);

  unsigned long long N;
  cin >> N;

  vector<unsigned long long> areas(N);
  for (unsigned long long i = 0; i < N; i++)
    cin >> areas[i];

  unsigned long long answer = 0;
  for (unsigned long long i = 0; i < N; i++)
  {
    unsigned long long s = areas[i];
    unsigned long long num = 2 * s + 1;
    if (isPrime(num))
      answer++;
  }

  cout << answer << endl;

  return 0;
}
