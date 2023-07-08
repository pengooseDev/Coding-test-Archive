#include <iostream>
#include <vector>
#include <cstring>
using namespace std;

const int N = 1120;
const int K = 14;

bool prime[N + 1];
int dp[K + 1][N + 1];
vector<int> primes;

void sieve()
{
    memset(prime, true, sizeof(prime));
    prime[0] = prime[1] = false;
    for (int i = 2; i * i <= N; ++i)
      if (prime[i])
        for (int j = i * i; j <= N; j += i)
          prime[j] = false;

    for (int i = 2; i <= N; ++i)
      if (prime[i])
        primes.push_back(i);
}

void set_dp()
{
  dp[0][0] = 1;
  for (int i = 0; i < primes.size(); i++)
    for (int j = K; j >= 1; j--)
      for (int k = primes[i]; k <= N; k++)
        if (j - 1 >= 0)
          dp[j][k] += dp[j - 1][k - primes[i]];
}

int main()
{
  ios::sync_with_stdio(false);
  cin.tie(0);

  sieve();
  set_dp();

  int T;
  cin >> T;

  while (T--) {
    int n, k;
    cin >> n >> k;

    cout << dp[k][n] << '\n';
  }

  return 0;
}
