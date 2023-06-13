#include <iostream>
using namespace std;

int main()
{
  int n, dp[501][501] = {0};
  cin >> n;

  for (int i = 1; i <= n; i++)
    for (int j = 1; j <= i; j++)
    {
      cin >> dp[i][j];
      dp[i][j] += max(dp[i - 1][j - 1], dp[i - 1][j]);
    }

  int answer = dp[n][1];
  for (int i = 2; i <= n; i++)
    if (dp[n][i] > answer)
      answer = dp[n][i];

  cout << answer << "\n";

  return 0;
}

/*
5
7 0 0 0 0
3 8 0 0 0
8 1 0 0 0
2 7 4 4 0
4 5 2 6 5
*/