#include <iostream>
#include <vector>
#include <algorithm>
#include <random>
#include <cmath>
using namespace std;

vector<unsigned long long> factors;

unsigned long long get_mul(unsigned long long a, unsigned long long b, unsigned long long mod)
{
  unsigned long long result = 0;

  while (b > 0)
  {
    if (b % 2 == 1)
      result = (result + a) % mod;

    a = (2 * a) % mod;
    b = b / 2;
  }

  return result;
}

unsigned long long get_pow(unsigned long long a, unsigned long long e, unsigned long long mod)
{
  unsigned long long result = 1;

  while (e > 0)
  {
    if (e % 2 == 1)
      result = get_mul(result, a, mod);

    a = get_mul(a, a, mod);
    e = e / 2;
  }

  return result;
}

unsigned long long gcd(unsigned long long a, unsigned long long b)
{
  while (b > 0)
  {
    a %= b;
    swap(a, b);
  }

  return a;
}

bool miller_rabin(unsigned long long n)
{
  if (n < 2)
    return false;

  int r = 0;
  unsigned long long d = n - 1;

  while (d % 2 == 0)
  {
    d /= 2;
    ++r;
  }

  for (int a : {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37})
  {
    if (n == a)
      return true;

    unsigned long long x = get_pow(a, d, n);

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

unsigned long long pollard(unsigned long long n)
{
  if (n % 2 == 0)
    return 2;

  random_device rd;
  mt19937 rg(rd());
  uniform_int_distribution<unsigned long long> dis(2, n - 1);

  for (int i = 0; i < 20; ++i)
  {
    unsigned long long x = dis(rg), y = x, c = dis(rg), g = 1;

    while (g == 1)
    {
      x = (get_mul(x, x, n) + c) % n;
      y = (get_mul(y, y, n) + c) % n;
      y = (get_mul(y, y, n) + c) % n;

      unsigned long long diff = x > y ? x - y : y - x;
      g = gcd(diff, n);
    }

    if (g < n)
      return g;
  }

  return 1;
}

void factorize(unsigned long long n)
{
  if (n == 1)
    return;

  if (miller_rabin(n))
  {
    factors.push_back(n);
    return;
  }

  unsigned long long d = pollard(n);

  factorize(d);
  factorize(n / d);
}

int main()
{
  unsigned long long N;
  cin >> N;

  factorize(N);

  sort(factors.begin(), factors.end());

  unsigned long long answer = 1;
  unsigned long long last = 0;
  unsigned long long exp = 0;

  for (unsigned long long f : factors)
  {
    if (f != last)
    {
      answer *= (exp + 1);
      last = f;
      exp = 1;
    }
    else
      exp++;
  }
  answer *= (exp + 1);

  cout << answer << endl;

  return 0;
}