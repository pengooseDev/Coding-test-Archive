#include <iostream>
#include <vector>
#include <algorithm>
#include <random>
#include <cmath>
using namespace std;

vector<long long> factors;

long long get_mul(long long a, long long b, long long mod)
{
  long long result = 0;

  while (b > 0)
  {
    if (b % 2 == 1)
      result = (result + a) % mod;

    a = (2 * a) % mod;
    b = b / 2;
  }

  return result;
}

long long get_pow(long long a, long long e, long long mod)
{
  long long result = 1;

  while (e > 0)
  {
    if (e % 2 == 1)
      result = get_mul(result, a, mod);

    a = get_mul(a, a, mod);
    e = e / 2;
  }

  return result;
}

long long gcd(long long a, long long b)
{
  while (b > 0)
  {
    a %= b;
    swap(a, b);
  }

  return a;
}

bool miller_rabin(long long n)
{
  if (n < 2)
    return false;

  int r = 0;
  long long d = n - 1;

  while (d % 2 == 0)
  {
    d /= 2;
    ++r;
  }

  for (int a : {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37})
  {
    if (n == a)
      return true;

    long long x = get_pow(a, d, n);

    if (x == 1 || x == n - 1)
      continue;

    bool composite = true;

    for (int j = 0; j < r - 1; ++j)
    {
      x = get_mul(x, x, n);

      if (x == n - 1)
      {
        composite = false;
        break;
      }
    }

    if (composite)
      return false;
  }

  return true;
}

long long pollard(long long n)
{
  if (n % 2 == 0)
    return 2;

  random_device rd;
  mt19937 rg(rd());
  uniform_int_distribution<long long> dis(2, n - 1);

  for (int i = 0; i < 20; ++i)
  {
    long long x = dis(rg), y = x, c = dis(rg), g = 1;

    while (g == 1)
    {
      x = (get_mul(x, x, n) + c) % n;
      y = (get_mul(y, y, n) + c) % n;
      y = (get_mul(y, y, n) + c) % n;
      g = gcd(abs(x - y), n);
    }

    if (g < n)
      return g;
  }

  return 1;
}

void fact(long long n)
{
  if (n == 1)
    return;

  if (miller_rabin(n))
  {
    factors.push_back(n);
    return;
  }

  long long d = pollard(n);
  fact(d);
  fact(n / d);
}

int main()
{
  long long n;
  cin >> n;

  fact(n);
  sort(factors.begin(), factors.end());

  for (auto factor : factors)
    cout << factor << endl;

  return 0;
}
