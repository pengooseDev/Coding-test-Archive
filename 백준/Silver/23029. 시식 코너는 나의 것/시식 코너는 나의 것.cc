#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  int n;
  cin >> n;

  vector<int> amount(n + 1);

  for (int i = 1; i <= n; i++)
    cin >> amount[i];

  vector<long long> dp(n + 1, 0);
  dp[1] = amount[1];
  if (n >= 2)
    dp[2] = max(amount[1] + amount[2] / 2, amount[2]);

  for (int i = 3; i <= n; i++)
    dp[i] = max({dp[i - 1], dp[i - 2] + amount[i], dp[i - 3] + amount[i - 1] + (amount[i] / 2)});

  cout << dp[n] << endl;

  return 0;
}