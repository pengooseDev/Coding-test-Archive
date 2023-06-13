#include <iostream>
#include <cmath>
using namespace std;

long long gcd(int n, int k)
{
  long long res = 1;

  for (int i = 2; i * i <= k; ++i)
  {
    int pk = 0;

    while (k % i == 0)
    {
      k /= i;
      pk++;
    }

    if (pk > 0)
    {
      int pn = 0;

      for (int j = i; j <= n; j *= i)
        pn += n / j;

      res *= pow(i, min(pn, pk));
    }
  }

  if (k > 1 && k <= n)
    res *= k;

  return res;
}

int main()
{
  int n, k;
  while (cin >> n >> k)
    cout << gcd(n, k) << "\n";

  cout << endl;

  return 0;
}
