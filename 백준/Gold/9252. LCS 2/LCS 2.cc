#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main()
{
  string s1, s2;
  cin >> s1 >> s2;

  int len1 = s1.length();
  int len2 = s2.length();

  vector<vector<int>> dp(len1 + 1, vector<int>(len2 + 1, 0));

  for (int i = 1; i <= len1; i++)
    for (int j = 1; j <= len2; j++)
      if (s1[i - 1] == s2[j - 1])
        dp[i][j] = dp[i - 1][j - 1] + 1;
      else
        dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);

  cout << dp[len1][len2] << endl;

  if (dp[len1][len2] > 0)
  {
    string lcs;
    int i = len1, j = len2;

    while (i > 0 && j > 0)
    {
      if (s1[i - 1] == s2[j - 1])
      {
        lcs = s1[i - 1] + lcs;
        i--;
        j--;
      }
      else if (dp[i - 1][j] > dp[i][j - 1])
        i--;
      else
        j--;
    }

    cout << lcs << endl;
  }

  return 0;
}
