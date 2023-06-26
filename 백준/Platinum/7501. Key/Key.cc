#include <iostream>
#include <numeric>
using namespace std;
typedef unsigned long long ull;

ull mm(ull a, ull b, ull m)
{
  ull r = 0;
  while (b)
  {
    if (b & 1)
      r = (r + a) % m;
    a = (a * 2) % m;
    b >>= 1;
  }
  return r;
}

ull mp(ull b, ull e, ull m)
{
  ull r = 1;
  while (e)
  {
    if (e & 1)
      r = mm(r, b, m);
    b = mm(b, b, m);
    e >>= 1;
  }
  return r;
}

bool is_prime(ull n)
{
  if (n < 2)
    return false;

  ull d = n - 1;
  int s = 0;

  while (d % 2 == 0)
  {
    d /= 2;
    s++;
  }

  for (ull a : {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37})
  {
    if (n == a)
      return true;

    ull x = mp(a, d, n);

    if (x == 1 || x == n - 1)
      continue;

    bool comp = true;
    for (int r = 1; r < s; r++)
    {
      x = mm(x, x, n);
      if (x == n - 1)
      {
        comp = false;
        break;
      }
    }

    if (comp)
      return false;
  }

  return true;
}

int main()
{
  ull A, B;
  cin >> A >> B;

  for (ull k = A; k <= B; k++)
  {
    if (k % 2 != 0 && (is_prime(k) || k == 9))
      cout << k << " ";
  }

  return 0;
}
