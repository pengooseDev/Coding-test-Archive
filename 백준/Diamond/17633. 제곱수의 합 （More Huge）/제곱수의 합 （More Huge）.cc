#include <iostream>
#include <vector>
#include <cmath>
#include <unordered_set>
#include <set>
#include <cstdlib>
#include <ctime>
#include <algorithm>
using namespace std;

typedef long long ll;
typedef __int128 i128;

ll gcd(ll a, ll b)
{
  return b == 0 ? a : gcd(b, a % b);
}

ll mod_mul(ll x, ll y, ll mod)
{
  return (i128)x * y % mod;
}

ll mod_exp(ll base, ll exp, ll mod)
{
  ll res = 1;
  while (exp > 0)
  {
    if (exp & 1)
      res = mod_mul(res, base, mod);

    base = mod_mul(base, base, mod);
    exp >>= 1;
  }

  return res;
}

bool miller_rabin(ll n, ll a)
{
  if (n % a == 0)
    return false;

  ll d = n - 1;
  while (1)
  {
    ll tmp = mod_exp(a, d, n);
    if (d & 1)
      return (tmp != 1 && tmp != n - 1);
    else if (tmp == n - 1)
      return false;
    d >>= 1;
  }
}

bool is_prime(ll n)
{
  for (ll a : {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37})
  {
    if (n == a)
      return true;

    if (n > 40 && miller_rabin(n, a))
      return false;
  }

  return n > 40;
}

ll f(ll x, ll n, ll c)
{
  return (mod_mul(x, x, n) + c) % n;
}

void pollard_rho(ll n, vector<ll> &factors)
{
  if (n == 1)
    return;

  if (n % 2 == 0)
  {
    factors.push_back(2);
    pollard_rho(n / 2, factors);
    return;
  }

  if (is_prime(n))
  {
    factors.push_back(n);
    return;
  }

  ll x, y, c, d;
  while (true)
  {
    x = y = rand() % (n - 2) + 2;
    c = rand() % 20 + 1;
    d = 1;

    do
    {
      x = f(x, n, c);
      y = f(f(y, n, c), n, c);
      d = gcd(abs(x - y), n);
    } while (d == 1);

    if (x != y)
      break;
  }

  pollard_rho(d, factors);
  pollard_rho(n / d, factors);
}

int main()
{
  ios::sync_with_stdio(0), cin.tie(0), cout.tie(0);

  ll n;
  cin >> n;

  while (n % 4 == 0)
    n /= 4;

  if (n % 8 == 7)
  {
    cout << 4 << '\n';
    return 0;
  }

  vector<ll> factors;
  pollard_rho(n, factors);

  set<ll> S;
  for (auto factor : factors)
  {
    if (S.count(factor))
      S.erase(factor);
    else
      S.insert(factor);
  }

  for (auto factor : S)
  {
    if (factor % 4 == 3)
    {
      cout << 3 << '\n';
      return 0;
    }
  }

  if ((ll)sqrt(n) * (ll)sqrt(n) != n)
    cout << 2 << '\n';
  else
    cout << 1 << '\n';

  return 0;
}
